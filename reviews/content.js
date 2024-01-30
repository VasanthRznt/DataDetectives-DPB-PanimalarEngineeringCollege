// content.js
function scrapeAmazonReviews() {
    const nameElements = document.querySelectorAll('div.a-profile-content span.a-profile-name');
    const ratingElements = document.querySelectorAll('div.a-row div.a-row span.a-icon-alt');
    const reviewTextElements = document.querySelectorAll('div.a-row.a-spacing-small.review-data span');
  
    const result = [];
  
    for (let i = 0; i < nameElements.length; i++) {
      const name = nameElements[i]?.innerText.trim() || 'N/A';
      const rating = ratingElements[i]?.innerText.trim() || 'N/A';
      const reviewText = reviewTextElements[i]?.innerText.trim() || 'N/A';
  
      result.push({ name, rating, reviewText });
    }
  
    return result;
  }
  
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.action === "scrapeAmazonReviews") {
        const reviewsData = scrapeAmazonReviews();
        sendResponse({ reviewsData });
      }
    }
  );
  