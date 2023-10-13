import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { Splitpanes, Pane } from 'splitpanes'

import { aliases, mdi } from "vuetify/lib/iconsets/mdi";

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components: {...components, Splitpanes, Pane },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  }
})

const app = createApp(App)
app.use(VueMonacoEditorPlugin, {
  paths: {
    // The recommended CDN config
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
  },
}).use(vuetify).mount('#app')