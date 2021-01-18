var readlineSync = require('readline-sync')
var chalk = require('chalk')
chalk.bgRgb(15, 100, 204).inverse('Hello!')

console.log("HOW WELL DO YOU KNOW ME?")
console.log()
var userName = readlineSync.question(chalk.yellow.bold("What is your name? "));
console.log(chalk.hex('#8e44ad').bold("Welcome " + userName + " !!\n"))

let highestScore = {
  name: "Tahir",
  score: 5
}


console.log(chalk.hex('#25ff55')("------------------------------------"))
console.log(chalk.hex('#ffb800')("Highest Score till now"))
console.log(chalk.hex('#ffb800')(highestScore.name))
console.log(chalk.hex('#ffb800')(highestScore.score))
console.log(chalk.hex('#25ff55')("------------------------------------"))

var questions = [
  {
    question: "1. What is my gaming alias? ",
    options:{
      "A": "Thranduill",
      "B": "ttahm3d",
      "C": "mysTik",
      "D": "morodor"
    },
    answer: "B"
  },
  {
    question: "2. When did I join twitter? ",
    options:{
      "A": "2015",
      "B": "2020",
      "C": "2014",
      "D": "2019"
    },
    answer: "C"
  },
  {
    question: "3. Which is my favorite color? ",
    options: {
      "A": "Blue",
      "B": "Sky blue",
      "C": "Ocean Blue",
      "D": "None of the above"
    },
    answer:"D"
  },
  {
    question: "4. When did I graduate my Engineering? ",
    options: {
      "A": "2019",
      "B": "2020",
      "C": "2017",
      "D": "2018"
    },
    answer: "D"
  },
  {
    question:"5. Who is my favorite singer? ",
    options: {
      "A": "Arijit Singh",
      "B": "Atif Aslam",
      "C": "Ustad Nusrat Fateh Ali Khan",
      "D": "Jubin Nautiyal"
    },
    answer: "A"
  }
]

var score = 0;

function checkTheAnswer(question, options, answer){
  let que = question;
  let opt = options;
  console.log(chalk.bgHex("#0f64cc").inverse(que))
  console.log()
  console.log(chalk.hex('#dced6d')("A: " + opt["A"]))
  console.log(chalk.hex('#dced6d')("B: " + opt.B))
  console.log(chalk.hex('#dced6d')("C: " + opt.C))
  console.log(chalk.hex('#dced6d')("D: " + opt.D))
  console.log()
  let userAnswer = readlineSync.question("Your answer: ")
  
  if (userAnswer.toUpperCase() === answer) {
    console.log(chalk.hex('#02f517')("RIGHT!!!!"))
    score +=1
  }
  else {
    console.log(chalk.hex('#ff0020')('WRONG!!!'))
  }
  console.log()
  
  console.log("Your current score = " + score + "\n")
}

for (let i = 0; i< questions.length; i = i+1) {
  currentQuestion = questions[i];
  checkTheAnswer(currentQuestion.question, currentQuestion.options, currentQuestion.answer)
}

console.log(chalk.hex('#05fcf0')("------------------------------------"))
console.log(chalk.hex('#05fcf0')("Your final score = " + score))
console.log(chalk.hex('#05fcf0')("------------------------------------"))


if(score >= highestScore.score) {
  highestScore.name = userName;
  
  console.log(chalk.hex('#25ff55')("------------------------------------"))
  console.log(chalk.hex('#ffb800')("You have scored the highest score so far"))
  console.log(chalk.hex('#ffb800')(highestScore.name))
  console.log(chalk.hex('#25ff55')("------------------------------------"))
}
