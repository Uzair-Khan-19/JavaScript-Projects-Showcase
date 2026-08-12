 function handleKey(){
       if (event.key === 'Enter') {
        calculateCost();
      }
     }

     function calculateCost(){
       const calculateElem = document.querySelector('.js-calculate');
       let cost = Number(calculateElem.value);
       
        if ( cost <= 40 && cost > 0) {
          cost += 10
           document.querySelector('.result').innerHTML = `$${Math.round(cost * 100) / 100}`
        } else if( cost < 0){
          document.querySelector('.result').innerHTML = `Invalid Number!`
        }
      //  document.querySelector('.result').innerHTML = `$${Math.round(cost * 100) / 100}`
      
     }

     function subscribeBTN(){
      const btn = document.querySelector('.subscribe-btn')
        if (btn.innerText === 'Subscribe') {
        btn.innerHTML = 'Subscribed'
        btn.classList.add('subribed-btn')
        } else {
        btn.innerHTML = 'Subscribe'
        btn.classList.remove('subribed-btn')
        }
     }
     