const PubSub = require('../helpers/pub_sub.js');
const VocabItemView = require('./vocab_item_view.js');
const Vocab = require('../models/vocab.js');
const SingleQuizView = require('./single_quiz_view.js')

const VocabGridView = function (container) {
  this.container = container;
};



VocabGridView.prototype.bindEvents = function () {

  // PubSub.subscribe('Vocab:uniqueCategoriesRetrieved', (event) => {
  //   this.populateCategoryDropdown(event.detail)
  // })


};

VocabGridView.prototype.showMultiple = function (vocabData) {
  this.container.innerHTML = " "
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid-container')
  const vocabItemView = new VocabItemView(gridDiv)
  this.container.appendChild(gridDiv);
  vocabData.forEach((item) => vocabItemView.renderItem(item))
  const getQuizButton = document.createElement('button');
  getQuizButton.textContent = "=>"
  getQuizButton.classList.add('go-to-quiz')
  getQuizButton.value = vocabData[0].category
  gridDiv.appendChild(getQuizButton)
  this.quizClick()
};

VocabGridView.prototype.getSelection = function () {
  const categoryContainer = document.querySelector('#category-select')
  console.log(categoryContainer);
  categoryContainer.addEventListener('click', (event) => {
    console.log(event.detail);
  //const categoryValue = event.target.value;
  PubSub.publish('vocabGridView:publishValue', categoryValue)
  }
)

};
VocabGridView.prototype.populateCategoryDropdown = function (categoryList) {
  const vocab = new Vocab;

  categoryList.forEach((category, index) => {
    const categoryContainer = document.querySelector('#category-select')
    const liItem = this.createLi(category, index)
    categoryContainer.appendChild(liItem)
})

};

VocabGridView.prototype.createLi = function (category, index) {
  const catLi = document.createElement('li');
  catLi.classList.add('category-chosen')
  catLi.value = index;
  catLi.textContent = category
  return catLi
};

VocabGridView.prototype.quizClick = function () {
  const quizClick = document.querySelector('.go-to-quiz')

  quizClick.addEventListener('click', () => {
    PubSub.publish('VocabGridView:quizCategorySelected', event.target.value)

  })
};
module.exports = VocabGridView;
