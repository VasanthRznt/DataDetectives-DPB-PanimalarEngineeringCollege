// popup.js
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "scrapeAmazonReviews" }, function (response) {
    if (response && response.reviewsData) {
      displayReviews(response.reviewsData);
    } else {
      console.error("Failed to scrape Amazon reviews.");
    }
  });
});

function displayReviews(reviewsData) {
  const reviewsContainer = document.getElementById('reviewsContainer');

  reviewsData.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('reviewCard');

    const nameElement = document.createElement('h3');
    nameElement.innerText = `Reviewer: ${review.name}`;

    const ratingElement = document.createElement('p');
    ratingElement.innerText = `Rating: ${review.rating}`;

    const reviewTextElement = document.createElement('p');
    reviewTextElement.innerText = `Review: ${review.reviewText}`;

    reviewCard.appendChild(nameElement);
    reviewCard.appendChild(ratingElement);
    reviewCard.appendChild(reviewTextElement);

    reviewsContainer.appendChild(reviewCard);
  });
}
