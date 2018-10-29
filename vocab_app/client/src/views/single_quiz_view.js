const PubSub = require('../helpers/pub_sub.js');

const SingleQuizView = function (container) {
  this.container = container;
};



SingleQuizView.prototype.bindEvents = function () {
  PubSub.subscribe('MissingWordQuiz:data-retrieved', (event) => {
    this.renderQuizItem(event.detail[0]);
  });

};


SingleQuizView.prototype.renderQuizItem = function (quizItem) {
  const itemDiv = document.createElement('div');
  itemDiv.id = quizItem._id;
  itemDiv.classList.add('item-div')

  const image = this.createImage(quizItem);
  itemDiv.appendChild(image);


  this.container.appendChild(itemDiv);
};

SingleQuizView.prototype.createImage = function (quizItem) {
  const imageDiv = document.createElement('div')
  imageDiv.classList.add('imageDiv')
  const image = document.createElement('img');
  imageDiv.appendChild(image)
  image.src = quizItem.image
  image.id = `img-${quizItem._id}`;
  image.classList.add('quiz-item-image')
  return imageDiv;
};


module.exports = SingleQuizView;
