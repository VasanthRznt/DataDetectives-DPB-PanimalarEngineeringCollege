// content.js
function highlightSponsoredText() {
  const sponsoredElements = document.querySelectorAll('.puis-label-popover-hover span.a-color-base');

  sponsoredElements.forEach(element => {
    if (element.textContent.trim().toLowerCase() === 'sponsored') {
      const outerDivision = findOuterDivision(element);
      if (outerDivision) {
        outerDivision.style.backgroundColor = 'red';
        outerDivision.style.padding = '5px';
      }
    }
  });

  return { success: true };
}

function findOuterDivision(element) {
  let currentElement = element;
  while (currentElement && currentElement.tagName !== 'DIV') {
    currentElement = currentElement.parentElement;
  }
  return currentElement;
}

highlightSponsoredText();
