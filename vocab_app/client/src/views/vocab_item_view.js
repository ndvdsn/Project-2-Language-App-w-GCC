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
  const nameDiv = document.createElement('div')
  nameDiv.classList.add('nameDiv')
  const name = document.createElement('p');
  nameDiv.appendChild(name)
  name.classList.add('vocab-item-name')
  nameDiv.id = `name-${vocabItem._id}`;
  nameDiv.style.display = "none";
  name.textContent = vocabItem.name
  const speakerBtn = document.createElement('button')
  speakerBtn.style.backgroundImage = "url('images/speaker2.png')";
  nameDiv.appendChild(speakerBtn)
  this.clickSpeaker(speakerBtn, vocabItem)
  return nameDiv;
};

VocabItemView.prototype.createImage = function (vocabItem) {
  const imageDiv = document.createElement('div')
  imageDiv.classList.add('imageDiv')
  const image = document.createElement('img');
  imageDiv.appendChild(image)
  image.src = vocabItem.image
  image.id = `img-${vocabItem._id}`;
  image.classList.add('vocab-item-image')
  this.clickImage(image, vocabItem)
  return imageDiv;
};

VocabItemView.prototype.clickSpeaker = function (speaker, vocabItem) {
  speaker.addEventListener('click', () => {
    const newUtterance = new SpeechSynthesisUtterance(`${vocabItem.name}`);
    speechSynthesis.speak(newUtterance)
  })

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
