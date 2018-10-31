const PubSub = require('../helpers/pub_sub.js');
const Vocab = require('../models/vocab.js');
const SingleQuizView = require('./single_quiz_view.js')

const QuizView = function(container){
  this.container = container;
};

QuizView.prototype.bindEvents = function () {
  PubSub.subscribe('MissingWordQuiz:data-retrieved', (event) => {
      const objectArray = event.detail
      console.log(event.detail);
    const object = objectArray[Math.floor(Math.random()*objectArray.length)];
      const singleQuizView = new SingleQuizView(this.container)
      console.log(object);
        singleQuizView.renderQuizItem(object);
        singleQuizView.submitClicked(object);
  });
PubSub.subscribe
  PubSub.subscribe('MissingWordQuiz:feedback', (event) => {
    const singleQuizView = new SingleQuizView(this.container)
    console.log(event.detail);
    singleQuizView.displayQuizFeedback(event.detail);
  })
};


module.exports = QuizView;
