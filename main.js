const questions = [
  {
    que: 'Which of the following markup language',
    a: 'HTML',
    b: 'CSS',
    c: 'JS',
    d: 'React',
    correct: 'a',
  },
  {
    que: 'What year was JS launched',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'None of these',
    correct: 'b',
  },
  {
    que: 'What does CSS stands for',
    a: 'HyperText Markup language',
    b: 'Cascading style sheet',
    c: 'Json object notainion',
    d: 'None of these',
    correct: 'b',
  },
];
let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.querySelector('#quesBox');
optiopInput = document.querySelectorAll('.options');
const loadQuestion = () => {
  const data = questions[index];

  if (index === total) {
    return endQuiz();
  } else {
  }
  reset();
  quesBox.innerHTML = `${index + 1}) ${data.que}`;
  optiopInput[0].nextElementSibling.innerText = data.a;
  optiopInput[1].nextElementSibling.innerText = data.b;
  optiopInput[2].nextElementSibling.innerText = data.c;
  optiopInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];

  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optiopInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optiopInput.forEach((input) => {
    if (input) {
      input.checked = false;
    }
  });
};

const endQuiz = () => {
  document.getElementById('box').innerText = `${right} /${total} are correct`;
};

loadQuestion();
