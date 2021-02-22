const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question;
let question="Who was the first American woman in space? ";
//let correctAnswer;
let correctAnswer="Sally Ride";
let candidateAnswer="";
let questions=["Who was the first American woman in space?",
"True or false: 5000 meters = 5 kilometers.",
"(5 + 3)/2 * 10 = ?",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?	",
"What is the minimum crew size for the ISS?"];
let correctAnswers=["Sally Ride","True","40","Trajectory","3"];
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");


}
let NumberofCorrectAnswers=0;
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 // let j=0;
    for(let i=0;i<questions.length;i++)
  {
    candidateAnswer=input.question(questions[i]);
    //console.log(candidateAnswer);
//console.log(correctAnswers[i]);

    if(candidateAnswer.toLowerCase()==correctAnswers[i].toLowerCase())
    {
      //console.log("candidateAnswer Correct");
      NumberofCorrectAnswers++;
     console.log(NumberofCorrectAnswers);
    }
    else{
      //console.log("candidateAnswer Wrong");
    }
console.log("your answer:"+candidateAnswer);
console.log("correct answer:"+correctAnswers[i]);
}
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let NumberofQuizQuestions=questions.length;
console.log("NumberofQuizQuestions:"+NumberofQuizQuestions);
console.log("NumberofCorrectAnswers"+NumberofCorrectAnswers);

  let grade;
  grade=(NumberofCorrectAnswers)/(NumberofQuizQuestions)*100;
  console.log(">>>Overall Grade:"+grade+"%");
  console.log("("+NumberofCorrectAnswers+" of "+NumberofQuizQuestions+" responses correct)<<<");

  if(grade>=80)
  {
    console.log(">>>Status:passed<<<");
  }
  else
  {
    console.log(">>>Status:failed<<<");
  }


 

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("candidate naem:" + candidateName);
  //console.log(candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};