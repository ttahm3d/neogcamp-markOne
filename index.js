var readlineSync = require('readline-sync')
var chalk = require('chalk')

var userName = readlineSync.question(chalk.yellow.bold("What is your name? "));
console.log(chalk.hex('#8e44ad').bold("Welcome " + userName + " !!\n"))

console.log("This is a quiz to understand", chalk.red("\"How well you know Tahir Ahmed\"") )

if (readlineSync.keyInYN('Do you want to proceed further')) {
  console.log('Quiz starting now...');
  console.log("\n")

var questions = [
  {
    question: "Where was I born? ",
    answer: "Hindupur"
  },
  {
    question: "In which year did I pass my 10th boards? ",
    answer: "2012"
  },
  {
    question: "How old was I when I watched my first movie in a theater? ",
    answer: "8"
  },
  {
    question: "In which stream did I complete my Bachelors of Engineering? ",
    answer: "cs"
  },
  {
    question: "In which year did I join Wipro? ",
    answer: "2018"
  }
]

var score = 0;

function checkTheAnswer(question, answer){
  console.log("------------------------------------")
  var userAnswer = readlineSync.question(chalk.hex('#eaff03')(question))
  console.log("Your answer is: " + userAnswer)
  if (userAnswer === answer) {
    console.log(chalk.hex('#02f517')("RIGHT!!!!"))
    score +=1
  }
  else {
    console.log(chalk.hex('#ff0020')('WRONG!!!'))
  }
  
  console.log("Your current score = " + score + "\n")
}

for (let i = 0; i< questions.length; i = i+1) {
  currentQuestion = questions[i];
  checkTheAnswer(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.hex('#05fcf0')("------------------------------------"))
console.log(chalk.hex('#05fcf0')("Your final score = " + score))
console.log(chalk.hex('#05fcf0')("------------------------------------"))
} else {
  console.log(chalk.green("Well, Try again sometime later"))
}

