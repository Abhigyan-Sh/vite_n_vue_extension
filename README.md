


### extension structure is src structure which is as follows:
- assets
  - - icon16
  - - icon48
  - - icon128
- content-scripts
  - - main.js
  - - Popup.vue
- styles
  - - main.css
- background.js
- manifest.json

manifest holds something which resembles like the metadata
name and version of extension with manifest version, icons for representation, 
background:{} and content_scripts:[]


HOw its works
- manifest 
- popup (html)
- background (service worker) (communicates between our popup and the chrome api)


### packages used:
iconify - for icons
vite-plugin-icons - allows to use iconify

defineConfig() in vite.config.js is used just to wrap object for purpose of IntelliSense which is a code-completion aid.

js docs are 
/**
 * @params {*} name
 * @params {*} age
 * @params {*} isDeveloper
 */
/**
 * @params {string} name The person's full name
 * @params {int} age ..
 * @params {boolean} isDeveloper ..
 */

now when we type in our function in our code it will tell us what the function assumes as its parameters.

To use a plugin, it needs to be added to the devDependencies of the project and included in the plugins array in the vite.config.js config file.


### this is how application starts..
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)
app.mount('#app')


OR

<div id="app">
  <button @click="count++">{{ count }}</button>
</div>

import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')



### vite.config.js ->(directs to) manifest.json -> now to start from where -> main.js
