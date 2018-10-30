const PubSub = require('../helpers/pub_sub.js');

const SingleQuizView = function (container) {
  this.container = container;
};

SingleQuizView.prototype.bindEvents = function () {
  PubSub.subscribe('MissingWordQuiz:data-retrieved', (event) => {
    const quizClick = document.querySelector('.quiz-select')

    quizClick.addEventListener('click', () => {
      const objectArray = event.detail
    const object = objectArray[Math.floor(Math.random()*objectArray.length)];

        this.renderQuizItem(object);
        this.submitClicked(object)
    })

  });

};

SingleQuizView.prototype.renderQuizItem = function (quizItem) {
  this.container.innerHTML = " "
  const itemDiv = document.createElement('div');
  itemDiv.id = `quiz-item-${quizItem.index}`
  itemDiv.classList.add('item-div')
  this.container.appendChild(itemDiv);
  const image = this.createImage(quizItem);
  itemDiv.appendChild(image);

  const sentence = this.createSentence(quizItem);
  itemDiv.appendChild(sentence);


};

SingleQuizView.prototype.createImage = function (quizItem) {
  const imageDiv = document.createElement('div')
  imageDiv.classList.add('imageDiv')
  const image = document.createElement('img');
  imageDiv.appendChild(image)
  image.src = quizItem.image
  image.classList.add('quiz-item-image')
  return imageDiv;
};

SingleQuizView.prototype.createSentence = function (quizItem) {
  const sentenceDiv = document.createElement('div')
  sentenceDiv.classList.add('sentenceDiv')
  const sentencea = document.createElement('p');
  sentenceDiv.appendChild(sentencea)
  sentencea.classList.add('quiz-item-sentence')
  sentencea.style.display = "inline-flex"
  sentencea.textContent = quizItem.sentence1[0];
  const form = document.createElement('form')
  sentencea.appendChild(form)
  const input = document.createElement('input')
  input.classList.add('input-word')
  input.type = "text";
  form.appendChild(input)
  const sentenceb = document.createElement('p')
  sentenceb.textContent = quizItem.sentence1[1];
  sentenceb.style.display = "contents"
  sentencea.appendChild(sentenceb);
  const button = document.createElement('button');
  button.textContent = "submit"
  button.classList.add('submitSentence')
  sentenceDiv.appendChild(button);
  return sentenceDiv;

}
SingleQuizView.prototype.submitClicked = function (quizItem) {


  const submitPosition = document.querySelector('.submitSentence')
  submitPosition.addEventListener('click', () => {
    const getInputContainer = document.querySelector('.input-word')
    const text = getInputContainer.value
    const validationArray = [];
    validationArray.push(text, quizItem.name);
    PubSub.publish('SingleQuizView:textSubmitted', validationArray)
  })
};


module.exports = SingleQuizView;
