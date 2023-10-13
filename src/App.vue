<script setup>
import { marked } from 'marked'
import ChallengePrompt from './components/ChallengePrompt.vue'
import CodeEditor from './components/CodeEditor.vue'
import { load, save } from './utils'
import confetti from 'canvas-confetti'
// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript';
</script>

<template>
  <header>
    <v-select
      v-model="selected_challenge"
      :items="challenge_display"
      item-title="display"
      item-value="file"
      @update:modelValue="loadmd"
    >
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props">
          <template v-slot:prepend>
            <v-chip :color="difficultyColor(item.raw.difficulty)">{{item.raw.difficulty}}</v-chip>
          </template>
        </v-list-item>
      </template>
    </v-select>
  </header>

  <main>
    <splitpanes class="default-theme">
      <pane min-size="20">
        <div>
          <ChallengePrompt 
            :html="challenge_text"
            :title="challenge_name"
            :chip="challenge_chip"
            :loading="loading"
          >
          </ChallengePrompt>
          <div v-if="selected_challenge">
            <v-btn variant="outlined" @click="testCode">Test</v-btn>
            <div v-if="test_response" class="output">
              <span v-if="test_response === true" class="font-weight-bold">
                <v-icon
                  color="green"
                  icon="mdi-checkbox-marked-circle"
                ></v-icon>
                Success!
              </span>
              <div v-else>
                <p class="text-red-darken-2">Failed test case</p>
                <code>{{test_response}}</code>
              </div>
            </div>
          </div>
        </div>
      </pane>
      <pane>
        <CodeEditor 
          ref="codeEditor" 
          @update="code_changed"
          :code="code"
        ></CodeEditor>
      </pane>
    </splitpanes>
        
  </main>
</template>

<script>
export default {
  data() {
    return {
      selected_challenge: null,
      prev_selected_challenge: null,
      challenges: [],
      challenge_map: {},
      challenge_text: `<h1>Choose a Challenge</h1>
      <p>Welcome! Here's some challenges for you to hopefully help you understand core concepts of programming (in <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a> specifically, but these skills transfer to all programming languages).</p>
      <p>Once you're ready, choose a challenge problem from the above dropdown. You'll be shown the challenge in the left pane and you can write your solution in the right pane.</p>
      <p>When you want to test your solution, hit the TEST button below this pane. I'll run your code against a few test cases to see if you pass the challenge. If your solution works, you'll see a <b>Success</b> message! If not, don't worry. Debug and try again! You will be shown the test case that didn't pass to help you debug. You might find it helpful to open the developer console while debugging. You can do so by pressing <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>i</kbd> (<kbd>cmd</kbd>+<kbd>alt</kbd>+<kbd>i</kbd> on Mac) or by right-clicking the page and selecting <b>Inspect</b>. All <code>console.log('things')</code> debug messages you put in your code will be shown in the dev console. Use those strategically to help you out of a bind.</p>

      <p>Code on and have fun!</p>
      `,
      code: '// your code here',
      saves: {},
      test_response: null,
      loading: false,
      // hljs: hljs
    }
  },
  computed: {
    challenge_display() {
      return this.challenges.map(({name, difficulty}) => {
        let file = name
        name = name.split('.')[0]
        let done = this.saves[file] ? this.saves[file].done : false
        return { display: name + (done ? ' ✔':''), file, done, difficulty }
      }) 
    },
    challenge_name() {
      if (!this.selected_challenge) {
        return null
      }
      return this.selected_challenge.split('.')[0]
    },
    challenge_chip() {
      if (!this.selected_challenge) {
        return null
      }
      let difficulty = this.challenge_map[this.selected_challenge].difficulty
      return {difficulty, color: this.difficultyColor(difficulty)}
    }
  },
  methods: {
    async loadmd() {
      this.test_response = null
      if (this.prev_selected_challenge) {
        this.saveProgress() 
      }
      this.loading = true
      let resp = await fetch('challenges/' +this.selected_challenge)
      let md = await resp.text()
      let html = marked.parse(md)
      // html = this.hljs.highlight(html, {language:'javascript'})
      this.challenge_text = html
      let challenge = this.getChallenge(this.selected_challenge)
      this.code = challenge.code || "// your code here"
      this.prev_selected_challenge = this.selected_challenge
      this.loading = false
      // this.hljs.highlightAll()
    },
    getChallenge(name) {
      let challenge = this.saves[name]
      if (!challenge) {
        challenge = {done:false}
        this.saves[name] = challenge
      }
      return challenge
    },
    saveProgress() {
      let challenge = this.getChallenge(this.prev_selected_challenge)
      challenge.code = this.code
      save('saves', this.saves)
    },
    debounce(func, sec = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {func.apply(this, args)}, sec)
      }
    },
    code_changed(code) {
      this.code = code
      this.debounce(() => this.saveProgress())()
    },
    testCode() {
      let tests = this.challenge_map[this.selected_challenge].tests
      for (let test of tests) {
        let res
        try {
          let nt = this.code + '\n' + test
          res = eval(nt)
        } catch (error) {
          this.test_response = "Check console. Error occured running test: " + test
          throw error
          return
        }
        if (!res) {
          this.test_response = test
          return
        }
      }
      this.test_response = true
      this.getChallenge(this.selected_challenge).done = true
      this.saveProgress()
      confetti()
    },
    difficultyColor(diff) {
      return {
        'easy': 'green',
        'med': 'orange',
        'hard': 'red'
      }[diff]
    }
  },
  async mounted() {
    let resp = await fetch('challenges.json')
    resp = await resp.json()
    this.challenges = resp
    this.challenges.forEach((c) => {
      this.challenge_map[c.name] = c
    })
    let saves = load('saves')
    if (!saves) {
      saves = {}
      save('saves', saves)
    }
    this.saves = saves
    // hljs.registerLanguage('javascript', javascript);
  }
}
</script>

<style>
.v-overlay-container .v-list {
  background-color: rgb(60,60,60) !important;
  color: white;
}
.v-overlay-container .v-chip{
  margin-right: 1rem;
}
.splitpanes {
  display: flex;
}
.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
}
.splitpanes__splitter {
  width: 5px;
  cursor: col-resize;
  background-color: rgb(170,170,170);
  margin: 3px;
}
.output {
  border-radius: 5px;
  padding: 3px;
  margin-top: 1em;
  border: 1px rgb(70,70,70) solid;
}
</style>
