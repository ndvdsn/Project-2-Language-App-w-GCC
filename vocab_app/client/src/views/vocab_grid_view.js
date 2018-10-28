const PubSub = require('../helpers/pub_sub.js');
const VocabItemView = require('./vocab_item_view.js');
const Vocab = require('../models/vocab.js');

const VocabGridView = function (container) {
  this.container = container;
};



VocabGridView.prototype.bindEvents = function () {
  this.getSelection()
  PubSub.subscribe('Vocab:data-retrieved', (event) => {
    const vocabData = event.detail;
    this.showMultiple(vocabData);

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

VocabGridView.prototype.getSelection = function () {
  const categoryContainer = document.querySelector(`.cat-${}`)
  console.log(categoryContainer);
  //categoryContainer.addEventListener('click', () => {
    console.log('you clicked?');
    //PubSub.publish('vocabGridView:publishValue')
  }
//)

//};
VocabGridView.prototype.populateCategoryDropdown = function (categoryList) {
  const vocab = new Vocab;

  categoryList.forEach((category, index) => {
    const categoryContainer = document.querySelector('#category-select')
    const liItem = this.createLi(category, index)
    categoryContainer.appendChild(liItem)
})

};

VocabGridView.prototype.createLi = function (category, index) {
  const catAnchor = document.createElement('a');
  catAnchor.classList.add('cat-${index}')
  catAnchor.value = index;
  catAnchor.textContent = category
  return catAnchor
};
module.exports = VocabGridView;
