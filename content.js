// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'scrapeContent') {
    // Implement your scraping logic here
    const scrapedContent = document.body.innerText;
    sendResponse({content: scrapedContent});
  }
});
