<script setup>
import { shallowRef } from 'vue'
</script>

<template>
  <vue-monaco-editor
    v-model:value="code_edited"
    theme="vs-dark"
    language="javascript"
    :options="MONACO_EDITOR_OPTIONS"
    @mount="handleMount"
  />
</template>

<script>
const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
  fixedOverflowWidgets: true,
  minimap: { enabled: false },
}

const editorRef = shallowRef()
  
export default {
  props: {
    code: String
  },
  data() {
    return {
      // code_edited: "// your code um"
    }
  },
  computed: {
    code_edited: {
      get() {return this.code},
      set(value) {this.$emit('update', value)}
    }
  },
  methods: {
    handleMount(editor) {
      editorRef.value = editor
    }
  },
  watch: {
    // code() {
    //   console.log('code changed')
    //   this.code_edited = this.code
    // }
  }
}
</script>