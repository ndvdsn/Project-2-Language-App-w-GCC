const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const MissingWordQuiz = function (url) {
  this.url = `http://localhost:3000/api/esol_vocabulary`;
  this.request = new Request(this.url);
  this.data = []
  this.quizData = []
};

MissingWordQuiz.prototype.getQuizData = function () {
  this.request.get()
  .then((data) => {
    data.forEach((item) => {
    this.quizData.push({name: item.name, image: item.image, sentence1: item.sentence1.split(item.name)})
    return this.quizData;

  })
    PubSub.publish('MissingWordQuiz:data-retrieved', this.quizData)
})
  .catch(console.error);
};

module.exports = MissingWordQuiz;
