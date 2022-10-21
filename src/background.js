chrome.action.onClicked.addListener(async tab => {
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { toggleVisible: true })
  }
})

async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  console.log({ tab })
  return tab
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case 'POPUP_TAB_PROPS':
      getCurrentTab().then(sendResponse)
      return true
    default:
      break
  }
})