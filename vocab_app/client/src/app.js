const Vocab = require('./models/vocab.js');
const VocabItemView = require('./views/vocab_item_view.js');
const VocabGridView = require('./views/vocab_grid_view.js');
const BannerView = require('./views/banner_view.js');
const MissingWordQuiz = require('./models/missing_word_quiz.js');
const SingleQuizView = require('./views/single_quiz_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');
  const bannerContainer = document.querySelector(".banner")
  const bannerView = new BannerView(bannerContainer)
  const bannerClass = bannerView.getSeason();
  bannerContainer.classList.add(bannerClass)
  console.log('Currently it is ' + bannerView.getSeason());
  const mainContainer = document.querySelector(".grid-view");
  const vocabGrid = new VocabGridView(mainContainer);
  vocabGrid.bindEvents()
  //vocabGrid.populateCategoryDropdown()

  // const vocabItem = new VocabItemView(mainContainer);
  // vocabItem.bindEvents()


  const quizItem = new SingleQuizView(mainContainer);
  quizItem.bindEvents()


  const missingWordQuiz = new MissingWordQuiz();
  missingWordQuiz.getQuizData()



  const vocab = new Vocab();

  vocab.bindEvents();
  vocab.getData();
  vocab.getCategories();

});
