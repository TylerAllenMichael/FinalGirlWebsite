//Variables used and correct quiz answers storage//
var correctAnswers = ['C', 'A', 'B', 'B', 'D', 'A', 'C', 'B', 'C', 'D'];
var quizForm = document.querySelector('.quizForm')
var resultLabel = document.querySelector('#resultText');

quizForm.addEventListener('submit', e => calculateResult(e))
function calculateResult (e) {
  e.preventDefault();

//Takes user's answers and then calculate number of correct responses
var inputAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value, quizForm.q5.value, quizForm.q6.value, quizForm.q7.value, quizForm.q8.value, quizForm.q9.value, quizForm.q10.value];
var correctAnswersCount = 0;

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
  resultLabel.textContent = "Congratulations! You have a " + correctPercentage + "% of survival. Which means you will probably survive Ghostface."
} else {
  resultLabel.textContent = "You have a " + correctPercentage + "% of survival. You're most likely dead. Try again or watch the movies."
}

  document.querySelector('.bg-modal').classList.remove("hide");

  //Reset form when complete
  quizForm.reset();
}

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').classList.add("hide");
});
