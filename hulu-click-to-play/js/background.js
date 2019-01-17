chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if(isHuluPage(changeInfo.url)){
    chrome.tabs.sendMessage(tabId, {isHuluPage: true});
  }
});

function isHuluWatchPage(url){
  return /hulu.com\/watch/.test(url)
}
