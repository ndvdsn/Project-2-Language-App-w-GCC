const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Vocab = function (url) {
  this.url = `http://localhost:3000/api/esol_vocabulary`;
  this.request = new Request(this.url);
  this.categoryList = []
};

Vocab.prototype.bindEvents = function () {
  PubSub.subscribe('vocabGridView:publishValue', (event) => {
    this.getByCategory(event.detail)
  })
};

Vocab.prototype.getData = function () {
  this.request.get()
  .then((data) => {
    PubSub.publish('Vocab:data-retrieved', data);
  })
  .catch(console.error);
}

Vocab.prototype.getCategories = function () {
  this.request.get()
  .then((data) => {

    this.categoryList = data.filter((obj, pos, arr) => {
         return arr.map(mapObj => mapObj.category).indexOf(obj.category) === pos;
     });

      PubSub.publish('Vocab:uniqueCategoriesRetrieved', this.categoryList)
    })

};

Vocab.prototype.getByCategory = function (index) {
  this.request.get()
  .then((data) =>{
  const categoryChosen = this.categoryList[index].category
  const categoryFiltered = data.filter((item) => {return item.category === categoryChosen})
  PubSub.publish('Vocab:data-retrieved', categoryFiltered)
})};
module.exports = Vocab;
