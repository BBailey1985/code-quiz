var timerEl = document.getElementById("#timer");
var quizBoxEl = document.getElementById("#quizBox");
var startButtonEl = document.getElementById("startButton")
var submitButtonEl = document.getElementById("submitButton")

//array of questions and answers
var quizQuestions = [
  {
    question: "Where is the correct place to insert JavaScript?",
    answers: ["the <body> section","the <head> section","both the <head> and the <body> section","the <header> section"],
    correctAnswer: "the <body> section"
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
console.log();

// quiz function
function startQuiz(){


};

// shows the results of the quiz
function showResults(){



}

//runs the quiz function
startQuiz();


//shows the results from the button click
submitButtonEl.addEventListener("click", showResults);
