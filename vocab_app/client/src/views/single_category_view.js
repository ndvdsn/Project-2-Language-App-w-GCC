const PubSub = require('../helpers/pub_sub.js');
const Vocab = require('../models/vocab.js');

const SingleCategoryView = function(container){
  this.container = container;
};


SingleCategoryView.prototype.renderCategory = function (category, index) {
  const div = document.createElement('div');
  div.classList.add('category-container');
  this.container.appendChild(div);
  const image = document.createElement('img');
  div.appendChild(image);
  image.src = category.image;
  image.value = index
  const para = document.createElement('p')
  div.appendChild(para);
  para.textContent = category.category;

};

module.exports = SingleCategoryView;
