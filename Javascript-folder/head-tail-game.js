 let score = JSON.parse(localStorage.getItem('score')) || {
      win: 0,
      lose: 0
    }
    displayScore()
    function headsTails(guess){
      let randNumber = Math.random();
      let result = ''
      let marks =''
        if (randNumber < 0.5) {
        result = 'Heads'
        } else {
        result = 'Tails'
        }
        if (result === guess) {
        displayScore()
        score.win = score.win +1
      } else {
        displayScore()
        score.lose = score.lose +1
      }
      
      localStorage.setItem('score', JSON.stringify(score));
      //  alert(`Your Guesses correct:${score.win} Your Guesses Wrong:${score.lose}`)
      displayScore()
      
      let show = document.querySelector('.js-move');
      show.innerHTML = (`Your Choice : <img src="images/${guess}.png" class="img"> 
      Computer choice : <img src="images/${result}.png" class="img">`)
    }
    function displayScore(){
      let move = document.querySelector('.js-score');
      move.innerHTML = (`Your Guess correct : ${score.win} - Your Guess wrong : ${score.lose}`)
    }
