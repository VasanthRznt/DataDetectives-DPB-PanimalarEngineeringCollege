// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'scrapeContent') {
    // Replace 'your-selector' with the appropriate CSS selector for your specific content
    const specificElement = document.querySelectorAll("div.a-expander-content.reviewText.review-text-content.a-expander-partial-collapse-content span");
    const r=[];
    for (let i = 0; i < specificElement.length; i++) {     
       const name = specificElement[i]?.innerText.trim() || 'N/A';r.push(name)}
console.log(specificElement);
    if (specificElement) {
      // Extract text content or other data from the selected element
      const scrapedContent = specificElement.innerText;
      sendResponse({ content: r });
    } else {
      sendResponse({ error: 'Element not found' });
    }
  }
});
