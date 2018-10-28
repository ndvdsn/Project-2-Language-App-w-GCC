const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Vocab = function (url) {
  this.url = `http://localhost:3000/api/esol_vocabulary`;
  this.request = new Request(this.url);
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

    const categoryList = data.map(item => item.category).filter((category, index, categories) =>
      categories.indexOf(category)===index)
      PubSub.publish('Vocab:uniqueCategoriesRetrieved', categoryList)
    })

};
module.exports = Vocab;
