// popup.js
document.getElementById("searchBtn").addEventListener("click", () => {
    const query = encodeURIComponent(document.getElementById("searchBox").value);
    if (query) {
      chrome.tabs.create({ url: `https://chat.openai.com/?q=${query}` });
    }
  });