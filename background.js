let color='#3aa757';

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color});
    console.log('Default background color set to %cgreen',`color:${color}`);

});

chrome.action.onClicked.addListener((tab)=>{
    console.log("im");
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content-script.js']
      });
})