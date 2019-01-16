chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if(urlUpdated(changeInfo.url) && isHuluPage(changeInfo.url)){
    chrome.tabs.sendMessage(tabId, {isHuluPage: true});
  }
});

function isHuluPage(url){
  return /hulu.com/.test(url)
}

function urlUpdated(url){
  return url !== null && url !== undefined
}
