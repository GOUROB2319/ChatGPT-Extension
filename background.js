// background.js
chrome.contextMenus.create({
    id: "searchChatGPT",
    title: "Search ChatGPT for '%s'",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchChatGPT") {
      const query = encodeURIComponent(info.selectionText);
      const url = `https://chat.openai.com/?q=${query}`;
      chrome.tabs.create({ url });
    }
  });