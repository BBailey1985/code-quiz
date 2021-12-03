// variables from HTML
var timerEl = document.querySelector("#timer");
var quizBoxEl = document.querySelector("#quizBox");
var startButtonEl = document.querySelector("#startButton");
var submitButtonEl = document.querySelector("#submitButton");
var quizAreaEl = document.querySelector("#quizArea");

// variables for time
var startTime = 75;

var holdInterval = 0;
var timePenalty = 10;

//array of questions and answers
var quizQuestions = [
  {
    question: "Where is the correct place to insert JavaScript?",
    answers: ["the <body> section","the <head> section","either the <head> and the <body> section","the <header> section"],
    correctAnswer: "either the <head> and the <body> section"
  },
  {
    question: "What does DOM stand for?",
    answers: ["Document Online Menu","Data Object Model","Data Opportunity Menu","Document Object Model"],
    correctAnswer: "Document Object Model"
  },
  {
    question: "The condition in an if/else statement is enclosed with what?",
    answers: ["Square Brackets","Quotes","Curly Brackets","Parentheses"],
    correctAnswer: "Parentheses"
  },
  {
    question: "Which built-in method combines the text of two strings and returns a new string?",
    answers: ["append()","concat()","attach()","None of these"],
    correctAnswer: "concat()"
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    answers: ["min(x,y);","Math.min(x,y)","Math.min(xy","min(xy);"],
    correctAnswer: "Math.min(x,y)"
  }
];

//starts timer once button is clicked
startButtonEl.addEventListener("click", function () {
  var countdownTimer = setInterval(function() {
    if (startTime <=0) {
      clearInterval(countdownTimer);
      timerEl.textContent = "Finished"
    }else{
      timerEl.textContent = "Timer: " + startTime;
    }
    startTime-=1;
  }, 1000);
});

// quiz function
function startQuiz(){


};

// shows the results of the quiz
function showResults(){



}

//runs the quiz function
startQuiz();


// //shows the results from the button click
// submitButtonEl.addEventListener("click", showResults);

// //starts the game with button click
startButtonEl.addEventListener("click", startQuiz);
console.log("Starting quiz now");
