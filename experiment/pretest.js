
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
const myQuestions = [
  {
    question: "Q1. Java is a __________ programming language.",
    answers: {
      a: "low level",
      b: "high level",
      c: "medium level",
      d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question: "Q2. Simple text editor like notepad can be used to write java programs.",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a"
  },

  {
    question: "Q3. Which of the following belongs to java programming language?",
    answers: {
      a: "Class",
      b: "Object",
      c: "Method",
      d: "All of the above"
    },
    correctAnswer: "d"
  },

{
    question: "Q4. Java is used to develop ______________.",
    answers: {
      a: "mobile apps",
      b: "web apps",
      c: "games",
      d: "All of the above"
    },
    correctAnswer: "d"
  },

{
    question: "Q5. Java is the short for JavaScript?",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b"
  },
];







// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
