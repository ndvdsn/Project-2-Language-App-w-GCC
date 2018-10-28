const Vocab = require('./models/vocab.js');
const VocabItemView = require('./views/vocab_item_view.js');
const VocabGridView = require('./views/vocab_grid_view.js');
const BannerView = require('./views/banner_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');
  const bannerContainer = document.querySelector(".banner")
  const bannerView = new BannerView(bannerContainer)
  const bannerClass = bannerView.getSeason();
  bannerContainer.classList.add(bannerClass)
  console.log('Currently it is ' + bannerView.getSeason());
  const mainContainer = document.querySelector(".main-container");
  const vocabGrid = new VocabGridView(mainContainer);
  vocabGrid.bindEvents()
  //vocabGrid.populateCategoryDropdown()

  // const vocabItem = new VocabItemView(mainContainer);
  // vocabItem.bindEvents()

  const vocab = new Vocab();
  // vocab.bindEvents();
  vocab.getData();
  vocab.getCategories();

});
