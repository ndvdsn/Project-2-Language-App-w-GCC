const PubSub = require('../helpers/pub_sub.js');
const VocabItemView = require('./vocab_item_view.js');

const VocabGridView = function (container) {
  this.container = container;
};



VocabGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Vocab:data-retrieved', (event) => {
    const vocabData = event.detail
    this.showMultiple(vocabData)

  });
};

VocabGridView.prototype.showMultiple = function (vocabData) {
  const gridDiv = document.createElement('div');
  gridDiv.classList.add('grid-container')
  const vocabItemView = new VocabItemView(gridDiv)
  this.container.appendChild(gridDiv);
  gridDiv.innerHTML = " "
  vocabData.forEach((item) => vocabItemView.renderItem(item))
};


module.exports = VocabGridView;
