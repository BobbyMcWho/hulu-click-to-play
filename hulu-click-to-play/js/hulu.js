chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.isHuluPage === true){
      const videoContainer = document.querySelector('.Player__container');
      const playbackButton = document.querySelector('.controls__playback-button');
      videoContainer.addEventListener('click', () => {
        playbackButton.click();
      });
    }
  });
