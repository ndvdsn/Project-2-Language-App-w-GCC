const PubSub = require('../helpers/pub_sub.js');

const VocabItemView = function (container) {
  this.container = container;
};

VocabItemView.prototype.bindEvents = function () {
  PubSub.subscribe('Vocab:data-retrieved', (event) => {
    this.renderItem(event.detail[0]);

  }
)
};

VocabItemView.prototype.renderItem = function (vocabItem) {
  const itemDiv = document.createElement('div');
  itemDiv.id = vocabItem._id;
  itemDiv.classList.add('item-div')




  this.container.appendChild(itemDiv);
};


module.exports = VocabItemView;
