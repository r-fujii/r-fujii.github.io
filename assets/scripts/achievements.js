import Filterizr from 'filterizr'

document.addEventListener('DOMContentLoaded', () => {
  const achievementsCardHolder = document.getElementById('achievements-card-holder')
  if (achievementsCardHolder != null && achievementsCardHolder.children.length !== 0) {
    // eslint-disable-next-line no-new
    new Filterizr('.filtr-achievements', {
      layout: 'sameWidth',
      gridItemsSelector: '.achievements-filtr-item',
      controlsSelector: '.achievements-filtr-control'
    })
  }
})