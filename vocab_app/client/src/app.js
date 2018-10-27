const Vocab = require('./models/vocab.js');
const VocabItemView = require('./views/vocab_item_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');

  const mainContainer = document.querySelector(".main-container");
  const vocabItem = new VocabItemView(mainContainer);
  vocabItem.bindEvents()

  const vocab = new Vocab();
  // vocab.bindEvents();
  vocab.getData();
});
