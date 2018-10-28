const PubSub = require('../helpers/pub_sub.js');
const VocabItemView = require('./vocab_item_view.js');
const Vocab = require('../models/vocab.js');

const VocabGridView = function (container) {
  this.container = container;
};



VocabGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Vocab:data-retrieved', (event) => {
    const vocabData = event.detail
    this.showMultiple(vocabData)

  });
  PubSub.subscribe('Vocab:uniqueCategoriesRetrieved', (event) => {
    this.populateCategoryDropdown(event.detail)
  })
};

VocabGridView.prototype.showMultiple = function (vocabData) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid-container')
  const vocabItemView = new VocabItemView(gridDiv)
  this.container.appendChild(gridDiv);
  gridDiv.innerHTML = " "
  vocabData.forEach((item) => vocabItemView.renderItem(item))
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
  const catUl = document.createElement('a');
  catUl.value = index;
  catUl.textContent = category
  return catUl
};
module.exports = VocabGridView;
