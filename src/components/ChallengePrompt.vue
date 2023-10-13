<template>
  <h1 v-if="title">{{loading ? 'Loading...' : title}}</h1>
  <v-chip class="challenge-chip" v-if="chip && !loading" :color="chip.color">{{chip.difficulty}}</v-chip>
  <div :class="['challenge-container', loading? 'loading':'']" v-html="html"></div>
</template>

<script>
export default {
  props: {
    html: String,
    title: String,
    chip: Object,
    loading: Boolean
  }
}
</script>

<style>
.challenge-container code, .challenge-container pre {
  border-radius: 4px;
  border: 1px solid rgb(70,70,70);
  background-color: rgb(30,30,30);
  padding: 1px 4px;
  color: rgb(175,120,80);
  font-family: monospace;
}
.challenge-container pre {
  width: fit-content;
}
.challenge-container pre code {
  border: none;
  padding: 0;
}  
.challenge-container ol, .challenge-container ul {
  margin-left: 1rem;
}
.challenge-container p, .challenge-container ol, .challenge-container ul, .challenge-container pre, .challenge-container blockquote {
  margin-bottom: 1rem;
}
.challenge-container kbd {
  border-radius: 4px;
  padding: 1px 4px;
  margin: 0px 1px;
  background-color: rgb(200,200,200);
  color: rgb(20,20,20);
  box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.75);
}
.challenge-container. p {
  background-color: rgb(100,100,100);
}
.challenge-chip {
  margin-bottom: 0.5rem;
}
.challenge-container p,
.challenge-container.loading ul,
.challenge-container.loading ol {
  border-radius: 6px;
  padding: 0.25rem
}
.challenge-container blockquote {
  border-left: 3px solid rgb(170,170,170);
  border-radius: 4px;
  margin-left: 0.25rem;
  padding-left: 0.5rem;
}
.challenge-container.loading p, 
.challenge-container.loading code,
.challenge-container.loading ul,
.challenge-container.loading ol,
.challenge-container.loading kbd,
.challenge-container.loading a,
.challenge-container.loading pre {
    border: none;
    margin-left: 0rem;
    background: linear-gradient(300deg, #757676, #323232);
    color: rgba(0,0,0,0);
    background-size: 200% 200%;
    box-shadow: none;

    -webkit-animation: loading-animation 2s ease infinite;
    -moz-animation: loading-animation 2s ease infinite;
    animation: loading-animation 2s ease infinite;
}
.challenge-container.loading code,
.challenge-container.loading kbd,
.challenge-container.loading a {
  background: rgba(0,0,0,0)
}
@keyframes loading-animation {
    0%{background-position:0% 24%}
    50%{background-position:100% 77%}
    100%{background-position:0% 24%}
}
</style>