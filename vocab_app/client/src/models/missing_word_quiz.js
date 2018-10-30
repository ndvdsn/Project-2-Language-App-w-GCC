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


MissingWordQuiz.prototype.checkTextSubmitted = function () {

 PubSub.subscribe('SingleQuizView:textSubmitted', (event) => {
   let result = false
   if(event.detail[0] === event.detail[1]){
     result = true;
   }
   const resultArray = []
   resultArray.push(result, event.detail[1], event.detail[2])
   PubSub.publish('MissingWordQuiz:feedback', resultArray)
 })

};



module.exports = MissingWordQuiz;
