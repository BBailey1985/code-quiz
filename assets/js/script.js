// variables from HTML
var timerEl = document.querySelector("#timer");
var startButtonEl = document.querySelector("#startButton");
var submitButtonEl = document.querySelector("#submitButton");
var quizAreaEl = document.querySelector("#quizArea");

// other variables
var startTime = 40;
var indexQuestions = 0;
var score = 0;
var timePenalty = 10;
var createUl = document.createElement("ul");

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
    answers: ["append()","attach()","concat()","None of these"],
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
      timerEl.textContent = "Time's up!";
      resultsPage();
    }else{
      timerEl.textContent = "Timer: " + startTime;
    }
    startTime--;
  }, 1000);
  render(indexQuestions);
});

// quiz function
function render(indexQuestions) {
  //clear existing data
  quizAreaEl.textContent = "";
  createUl.textContent = "";
  //questions loop
  for (var i = 0; i < quizQuestions.length; i++) {
    var userQuestion = quizQuestions[indexQuestions].question;
    var userAnswers = quizQuestions[indexQuestions].answers;
    quizAreaEl.textContent = userQuestion;
  }
  userAnswers.forEach(function (newLine) {
    var listItem = document.createElement("li");
    listItem.textContent = newLine;
    quizAreaEl.appendChild(createUl);
    createUl.appendChild(listItem);
    listItem.addEventListener("click", (validate));
  });
}

// validating selection with answers
function validate(event) {
  var element = event.target;

  if (element.matches("li")) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "newDiv");
    // if answer is correct
    if (element.textContent == quizQuestions[indexQuestions].correctAnswer) {
      score++;
      newDiv.textContent = "Correct! Great Job";
      // if answer is wrong
    } else {
      startTime = startTime - timePenalty;
      newDiv.textContent = "Incorrect. Better luck next time";
    }
  }
  // the indexQuestions figures out which number question user is on
  indexQuestions++;

  if (indexQuestions >= quizQuestions.length) {
    resultsPage();
    document.querySelector("#newDiv").display = "none";
  } else {
    render(indexQuestions);
  }
  quizAreaEl.appendChild(newDiv);
}

// results page
function resultsPage() {
   //clear existing data
   quizAreaEl.textContent ="";
   timerEl.remove();

   //new header created
   var resultsH1 = document.createElement("h1");
   resultsH1.setAttribute("id", "resultsH1");
   resultsH1.textContent = "Thanks for playing!";

   quizAreaEl.appendChild(resultsH1);

   // new text paragraph created
   var resultsP = document.createElement("p")
   resultsP.setAttribute("p", "resultsP");
   resultsP.textContent = "You got " + score + " out of " + quizQuestions.length + " Correct!"; 
   quizAreaEl.appendChild(resultsP);

   //enter initials label
   var resultsLabel = document.createElement("label");
   resultsLabel.setAttribute("id", resultsLabel);
   resultsLabel.textContent = "Enter your initials: ";
   quizAreaEl.appendChild(resultsLabel);

   // enter initials form
   var resultsForm = document.createElement("input");
   resultsForm.setAttribute("type", "text");
   resultsForm.setAttribute("id", "initials");
   resultsForm.setAttribute("placeholder", "Enter Initials Here");
   quizAreaEl.appendChild(resultsForm);

   // submit button
   var resultsButton = document.createElement("button")
   resultsButton.setAttribute("type", "submit");
   resultsButton.setAttribute("id", "submit");
   resultsButton.textContent = "Submit";
   quizAreaEl.appendChild(resultsButton);

   // event listener for resultsButton
   resultsButton.addEventListener("click", function() {
     initials = resultsForm.value;
     var finalScore = {
       initials: initials,
       score: score,
     }
     
   })

}