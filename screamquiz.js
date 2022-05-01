const quizForm = document.querySelector('.qnsForm');
const resultPanel = document.querySelector('#result');
const Marks = document.querySelector('span.marks');
const testAnswers = ['C', 'A', 'B', 'B', 'D', 'A', 'C', 'B', 'C', 'D'];

quizForm.addEventListener('submit', e => {
  e.preventDefault();

  let userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value, quizForm.q5.value, quizForm.q6.value, quizForm.q7.value, quizForm.q8.value, quizForm.q9.value, quizForm.q10.value];
  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === testAnswers[index]) {
      score += 10;
    }
  });

  resultPanel.classList.remove('hide');

  scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  let output = 0;

  const counter = setInterval(() => {
    Marks.textContent = `${output}%`;

    if (output === score) {
      clearInterval(counter);
    } else {
      output++;
    }
  }, 10)

  quizForm.reset();

});



const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
