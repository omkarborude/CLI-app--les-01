var readlineSync = require("readline-sync");

var score = 0;

// input & output
var userName = readlineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to DO YOU KNOW Tanay?");


// high Score data
var highScores = [
  {
    name: "Tanay",
    score: 10,
  },

  {
    name: "Akash",
    score: 10,
  },
]

// function play
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching R & W
    console.log("right!");
    score = score + 1;
    
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

// array for objects
var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "My favorite superhero would be? ",
  answer: "Dhruv"
},
{
  question: "Where do I work? ",
  answer: "Microsoft"
}];

// loop 
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")
