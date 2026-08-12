 let calculation = localStorage.getItem('calculation') || '' ;

    displayCalculation();

    function equal(value){
      calculation += value
      displayCalculation();
      localStorage.setItem('calculation' , calculation)
    }

    function displayCalculation(){

      let display = document.querySelector('.display-cal')
      display.innerHTML = calculation
    }