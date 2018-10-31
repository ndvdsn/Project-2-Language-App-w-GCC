const Vocab = require('./models/vocab.js');
const VocabItemView = require('./views/vocab_item_view.js');
const VocabGridView = require('./views/vocab_grid_view.js');
const BannerView = require('./views/banner_view.js');
const MissingWordQuiz = require('./models/missing_word_quiz.js');
const SingleQuizView = require('./views/single_quiz_view.js');
const CategoryView = require('./views/category_view.js')
const QuizView = require('./views/quiz_view.js')
const PubSub = require('../src/helpers/pub_sub.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');
  const bannerContainer = document.querySelector(".banner")
  const bannerView = new BannerView(bannerContainer)
  const bannerClass = bannerView.getSeason();
  bannerContainer.classList.add(bannerClass)



  const mainContainer = document.querySelector(".grid-view");
  const vocabGrid = new VocabGridView(mainContainer);

  const categoryView = new CategoryView(mainContainer);
  categoryView.bindEvents();

  const home = document.querySelector('#home-image')
  home.addEventListener('click', () => {
    console.log('hello');
    categoryView.returnHome()
  })


  const missingWordQuiz = new MissingWordQuiz();
  missingWordQuiz.getQuizData()
  missingWordQuiz.checkTextSubmitted()


  const vocab = new Vocab();

  vocab.bindEvents();
  vocab.getData();
  vocab.getCategories();

  const quizView = new QuizView(mainContainer)
  quizView.bindEvents();
});
