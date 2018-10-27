const PubSub = require('../helpers/pub_sub.js');

const VocabItemView = function (container) {
  this.container = container;
};

// VocabItemView.prototype.bindEvents = function () {
//   PubSub.subscribe('Vocab:data-retrieved', (event) => {
//     this.renderItem(event.detail[1]);
//
//   }
// )
// };

VocabItemView.prototype.renderItem = function (vocabItem) {
  const itemDiv = document.createElement('div');
  itemDiv.id = vocabItem._id;
  itemDiv.classList.add('item-div')

  const image = this.createImage(vocabItem);
  itemDiv.appendChild(image);

  const name = this.createName(vocabItem);
  itemDiv.appendChild(name);

  this.container.appendChild(itemDiv);
};

VocabItemView.prototype.createName = function (vocabItem) {
  const name = document.createElement('p');
  name.classList.add('vocab-item-name')
  name.id = `name-${vocabItem._id}`;
  name.style.display = "none";
  name.textContent = vocabItem.name
  return name;
};

VocabItemView.prototype.createImage = function (vocabItem) {
  const image = document.createElement('img');
  image.src = vocabItem.image
  image.id = `img-${vocabItem._id}`;
  image.classList.add('vocab-item-image')
  this.clickImage(image, vocabItem)
  return image;
};

VocabItemView.prototype.clickImage = function (image, vocabItem) {
  image.addEventListener('click', () => {
    const nameStyleSetting = document.querySelector(`#name-${vocabItem._id}`)
    if (nameStyleSetting.style.display === "none") {
      nameStyleSetting.style.display = "block"

      const newUtterance = new SpeechSynthesisUtterance(`${vocabItem.name}`);
      speechSynthesis.speak(newUtterance)


    }
      else {
        nameStyleSetting.style.display = "none"
      }

  })

};

module.exports = VocabItemView;
