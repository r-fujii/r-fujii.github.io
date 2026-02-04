import Filterizr from 'filterizr'

document.addEventListener('DOMContentLoaded', () => {
  const publicationCardHolder = document.getElementById('publications-card-holder');

  if (publicationCardHolder == null || publicationCardHolder.children.length === 0) {
    return;
  }

  const updatePublicationNumbers = () => {
    const visibleItems = Array.from(document.querySelectorAll('.pub-filtr-item'))
                              .filter(item => item.style.display !== 'none');

    const total = visibleItems.length;

    visibleItems.forEach((item, index) => {
      const numberSpan = item.querySelector('.pub-number');
      if (numberSpan) {
        numberSpan.textContent = `${total - index}. `;
      }
    });
  };

  new Filterizr('.filtr-publications', {
    gridItemsSelector: '.pub-filtr-item',
    controlsSelector: '.pub-filtr-control',
    layout: 'vertical',
    callbacks: {
        onFilteringEnd: () => {
            updatePublicationNumbers();
        }
    }
  });

  // initialize publication numbers on page load
  updatePublicationNumbers();
})
