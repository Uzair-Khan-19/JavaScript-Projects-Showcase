 let score = JSON.parse(localStorage.getItem('score'));

    if (score === null) {
      score = {
        win : 0,
        lose : 0,
        tie : 0
      }
    }

    updateScore()
    
const autoBtnElem = document.querySelector('.auto-btn')

let isAutoPlaying = false;
let stopInterval;
 function autoPlay(){
    if (!isAutoPlaying) {
      stopInterval = setInterval(function(){
      const playerMove = pickComputerMove()
      humanMove(playerMove);
      },1000)
      isAutoPlaying = true;
      autoBtnElem.innerHTML = 'Stop Playing'
    } else {
      clearInterval(stopInterval);
      isAutoPlaying = false;
      autoBtnElem.innerHTML = 'Auto Play'
    }
  }
   
document.querySelector('.js-rock-btn').addEventListener('click', () => {
  humanMove('Rock')
})
document.querySelector('.js-paper-btn').addEventListener('click', () => {
  humanMove('Paper')
})
document.querySelector('.js-scissors-btn').addEventListener('click', () => {
  humanMove('Scissors')
})

document.body.addEventListener('keydown',(event) => {
  console.log(event.key)
  if(event.key === 'r' || event.key === 'R'){
    humanMove('Rock');
  } else if (event.key === 'p' || event.key === 'P'){
    humanMove('Paper');
  } else if(event.key === 's' || event.key === 'S'){
    humanMove('Scissors');
  } else if (event.key ==='a' || event.key === 'A'){
    autoPlay();
  } else if (event.key === 'Backspace') {
    showConfirmation()
  }
})

function showConfirmation(){
  document.querySelector('.show-confirmation').innerHTML = `
  Are you sure you want to reset Score?
  <button class="js-reset-yes-btn">Yes</button>
  Are you sure you want to reset Score? 
  <button class="js-reset-no-btn">No</button>
  `
  document.querySelector('.js-reset-yes-btn').addEventListener('click', () => {
    hidePanel();
    resetScore();
  })

  document.querySelector('.js-reset-no-btn').addEventListener('click' , () => {
    hidePanel()
  })
}
function hidePanel(){
  document.querySelector('.show-confirmation').innerHTML = ''
}    
    
    function humanMove(playerMove){
     let computerGuess = pickComputerMove();
     let result = ''
      if (playerMove === 'Scissors') {
        if (computerGuess === 'Rock') {
          result = 'You lose!'
        } else if (computerGuess === 'Paper') {
          result = 'You win!'
        } else if (computerGuess === 'Scissors') {
          result = 'Tie!'
        }
        
      } 
      else if (playerMove === 'Paper'){
        if (computerGuess === 'Rock') {
          result = 'You win!'
        } else if (computerGuess === 'Paper') {
          result = 'Tie!'
        } else if (computerGuess === 'Scissors') {
          result = 'You lose!'
        }
        
      } 
      else if (playerMove === 'Rock'){
        if (computerGuess === 'Rock') {
          result = 'Tie!'
        } else if (computerGuess === 'Paper') {
          result = 'You lose!'
        } else if (computerGuess === 'Scissors') {
          result = 'You win!'
        }
        
      }

      if (result === 'You win!') {
        score.win = score.win + 1
      } else if (result === 'You lose!'){
        score.lose = score.lose + 1
      } else if (result === 'Tie!'){
        score.tie = score.tie + 1
      }
      
      localStorage.setItem('score', JSON.stringify(score));
      
      updateScore();

      document.querySelector('.js-result')
        .innerHTML = result

      document.querySelector('.js-move')
        .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon" > Computer <img src="images/${computerGuess}-emoji.png" class="move-icon" >` 
      
    } 

    function updateScore(){
      document.querySelector('.js-score')
        .innerHTML = `Wins ${score.win} - Loose ${score.lose} - Tie ${score.tie}`
    }
    
    function pickComputerMove(){
      const randomNumber = Math.random()
        if (randomNumber >= 0 && randomNumber < 1/3) {
            computerGuess = 'Rock'
          } else if (randomNumber >= 1/3 && randomNumber < 1/2) {
            computerGuess = 'Paper'
          } else if (randomNumber >= 1/2 && randomNumber < 1) {
            computerGuess = 'Scissors'
        } 
        return computerGuess;
    }
    
  function resetScore() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0
    localStorage.removeItem('score');
    updateScore();
    result();
  }