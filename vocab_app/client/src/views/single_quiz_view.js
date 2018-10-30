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
        this.submitClicked(object);
    })
  });

  PubSub.subscribe('MissingWordQuiz:feedback', (event) => {
    console.log('hello');

    console.log(event.detail);
    this.displayQuizFeedback(event.detail);
  })
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
    validationArray.push(text, quizItem.name, quizItem.sentence1);
    PubSub.publish('SingleQuizView:textSubmitted', validationArray)
  })

};

SingleQuizView.prototype.displayQuizFeedback = function (response) {
//subscribe to result channel
  const getInputContainer = document.querySelector('.input-word')
  if (response[0] === true) {
    // concatenate the first part of the sentence, the form input and the second part of the sentence
    // form.input
    // sentenceb.textContent

    const newUtterance = new SpeechSynthesisUtterance(`${response[2][0]} ${response[1]} ${response[2][1]}`);
    speechSynthesis.speak(newUtterance)

    // console.log(`${response[2][0]} ${response[1]} ${response[2][1]}`);


    // change the form input box to green background
    document.querySelector('.input-word').style.backgroundColor = 'green'
    document.querySelector('.input-word').style.color = "white"
  } else {

    document.querySelector('.input-word').style.backgroundColor = 'red'
    document.querySelector('.input-word').style.color = "white"
    document.querySelector('.input-word').value=null;

  }



// shows info based on result (if statement)
//change input border based on response
//if correct read back the sentence
//if incorrect voice says try again and input cleared


};
module.exports = SingleQuizView;
