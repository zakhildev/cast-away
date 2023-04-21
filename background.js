chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == "complete") {
    chrome.scripting.executeScript({
      target: {
        tabId: tabId,
      },
      func: () => {
        if (location.hostname !== "www.youtube.com") {
          return;
        }
        const hideButton = () => {
          const castButton = document.querySelector(
            ".ytp-remote-button.ytp-button"
          );
          castButton.hidden = true;
        };
        setTimeout(() => {
          hideButton();
          console.log("[Cast Away] Cast to TV button hidden!");
        }, 100);
      },
    });
  }
});
