const PubSub = require('../helpers/pub_sub.js');
const SingleCategoryView = require('./single_category_view.js')
const VocabGridView = require('./vocab_grid_view.js')

const CategoryView = function(container){
  this.container = container;
};

CategoryView.prototype.bindEvents = function () {
  PubSub.subscribe('Vocab:uniqueCategoriesRetrieved', (event) => {
    this.renderCategories(event.detail)
    this.getSelection()
  })

  PubSub.subscribe('Vocab:data-retrieved', (event) => {
    const vocabData = event.detail;
    console.log(event.detail);
    const vocabGridView = new VocabGridView(this.container)
    vocabGridView.showMultiple(vocabData);

  });
};

CategoryView.prototype.renderCategories = function (categories, index) {
  console.log(categories);
  this.container.innerHTML = " "
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('category-grid-container')
  const singleCategoryView = new SingleCategoryView(gridDiv)
  this.container.appendChild(gridDiv);
  categories.forEach((item, index) => singleCategoryView.renderCategory(item, index))

};

  CategoryView.prototype.getSelection = function () {
  const categoryContainer = document.querySelector('.category-grid-container')
  categoryContainer.addEventListener('click', (event) => {
    console.log(event.target.value);
  const categoryValue = event.target.value;
  PubSub.publish('vocabGridView:publishValue', categoryValue)
  }
)};
module.exports = CategoryView;
