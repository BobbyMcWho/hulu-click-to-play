chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.isHuluPage === true){
      const videoContainer = document.querySelector('.video-player');
      const playbackButton = document.querySelector('.controls__playback-button');
      videoContainer.addEventListener('click', () => {
        playbackButton.click();
      });
    }
  });
