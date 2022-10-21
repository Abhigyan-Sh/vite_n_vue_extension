import { createApp } from 'vue'
import Popup from './Popup.vue'
import '@/styles/main.css'

const MOUNT_EL_ID = 'as-awesome-extension'

let mountEl = document.getElementById(MOUNT_EL_ID)
if (mountEl) {
  mountEl.innerHTML = ''
}
mountEl = document.createElement('div')
mountEl.setAttribute('id', MOUNT_EL_ID)
document.body.appendChild(mountEl)

const vm = createApp(Popup).mount(mountEl)
chrome.runtime.onMessage.addListener(message => {
  if (message.toggleVisible) {
    vm.visible = !vm.visible
  }
})


/* 
so it's going to take the popup and append it to the document.body 

while message is nothing when you click it its like a activity 
for which some info gets generated which then needs to be 
passed on (message consists of toggleVisible which seems to be boolean)
and makes popup visible


vm.visible, where vm is instance of you know what visible is the global 
variable in Popup.vue which you can look at. So we switch the 
value of visible there in Popup.vue and then either its visible or invisible.



 */