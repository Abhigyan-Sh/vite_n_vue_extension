<script>
import { defineComponent, ref, onMounted, toRefs, reactive } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const state = reactive({
      currentTab: null
    })

    onMounted(() => {
      chrome.runtime.sendMessage({ type: 'POPUP_TAB_PROPS' }, async tab => {
        state.currentTab = await tab
        console.log(state.currentTab)
      })
    })

    return {
      visible,
      ...toRefs(state)
    }
  }
})
</script>
<template>
  <div class='overlay' v-show="visible">
    <div class='popup'>
      <h1>Below you get to see tab properties(play with properties.)</h1>
      <pre>{{ currentTab }}</pre>
    </div>
  </div>
</template>

<style>
.overlay {
  @apply fixed inset-0 w-full h-full bg-black bg-opacity-10 z-50
}

.popup {
  @apply absolute top-4 right-4 bg-white shadow-lg p-4 rounded-md w-72 text-black
}
</style>

<!-- 
Component state consists of reactive JavaScript objects. When you
modify them, the view updates. It makes state management simple

Converts a reactive object to a plain object where each property of the 
resulting object is a ref pointing to the corresponding property of the 
original object. Each individual ref is created using toRef().
 -->