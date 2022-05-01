//Constants//
const correctAnswers = ['C', 'A', 'B', 'B', 'D', 'A', 'C', 'B', 'C', 'D'];
const quizForm = document.querySelector('.quizForm')
const resultLabel = document.querySelector('#resultText');

quizForm.addEventListener('submit', e => calculateResult(e))
function calculateResult (e) {
  e.preventDefault();

//Takes user's answers and then calculates number of correct responses
let inputAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value, quizForm.q5.value, quizForm.q6.value, quizForm.q7.value, quizForm.q8.value, quizForm.q9.value, quizForm.q10.value];
let correctAnswersCount = 0;

//Calculating number of correct answers user has given
correctAnswers.forEach((correctAnswer, index) => {
  if (correctAnswer === inputAnswers[index]) {
    correctAnswersCount++;
  }
});

//Calculating percentage of correct answers by using total length of array
var correctPercentage = correctAnswersCount / correctAnswers.length * 100;

  //Display percentage result
if (correctPercentage > 60) {
  resultLabel.textContent = "Congratulations! You did very well. You scored " + correctPercentage + "%."
} else {
  resultLabel.textContent = "You scored " + correctPercentage + "%. I'd suggest you try again or watch the movies."
}

console.log(resultText)
//Reset form when complete
  quizForm.reset();
}
