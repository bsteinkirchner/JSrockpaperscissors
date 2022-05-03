// Setting the scores and selecting our HTML elements.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

// Game Functionality: Setting forEach function for the buttons.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and the player
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];

           // If it's a tie
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Tie ! ";
               text.style.color = 'orange';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'orange';
           } 
          // if it's not a tie
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "WINNER!";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You lose!";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You lose!";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "WINNER!";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You lose!";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "WINNER!";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }
        });
    });
}
// Calling the function.
game();
// This function contains all the game logic.
/*function getUserChoice(userInput){
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 'paper' || 'scissors') {
    return userInput;
  } else {
    alert('Error!');
  }
};

function getComputerChoice(){
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2: 
    return 'scissors';
  }
};

function determineWinner (userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'Tie!';
  } if (userChoice === 'rock' && computerChoice === 'paper'){
    return 'computer won';
  } else {
    return 'you won!';
  } if (userChoice === 'paper' && computerChoice === 'scissors'){
    return 'The computer won!';
  } else {
    return 'You won!';
  } if (userChoice === 'scissors' &&computerChoice === 'rock'){
  return 'Computer won!';
  } else{
    return 'You won';
  }
};
/*console.log(determineWinner('paper', 'scissors'));
function playGame(){
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log('You threw' + ' ' + userChoice);
  console.log('The computer threw' + ' ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();*/