let cartQuantity = 0;
        liveCart()
       function updateQuantity(items){
           if( items === 1) { //These are shorte way of re-assingning value
                if (cartQuantity >= 10) {
                console.log('Cart is full')
                
                }
                else {console.log(`cartQuantity ${cartQuantity}`)
                    cartQuantity++
                    liveCart();
                }
                
            }
            else if (items === 2){
                //These are shorte way of re-assingning value
                if (cartQuantity >= 10) {
                console.log('Cart is full')}
                else {console.log(`cartQuantity ${cartQuantity}`)
                     cartQuantity += 2
                    liveCart();
                }
            }
            else if (items === 3){
               
                if (cartQuantity >= 10) {
                console.log('Cart is full')
                }
                else {console.log(`cartQuantity ${cartQuantity}`)
                     cartQuantity = cartQuantity + 3;
                     liveCart();
                }
        
            }
            else if (items === -1){
                cartQuantity--
                if (cartQuantity < 0 ) {
                console.log('Not enough item in the Cart Please add some')
                }
    
                else {console.log(`Removed 1 Item Quantity of cart is ${cartQuantity}`)
                    liveCart();
                }
            }
            else if (items === -2){
                cartQuantity -= 2
                if (cartQuantity < 0 ) {
                    console.log('Not enough item in the Cart Please add some')
                }
                else {console.log(`Removed 2 Item Quantity of cart is ${cartQuantity}`)
                    liveCart();
                }
                
            }
            else if (items === -3){
                cartQuantity -= 3
                if (cartQuantity < 0 ) {
                 console.log('Not enough item in the Cart Please add some')
                }
                else {console.log(`Removed 3 Item Quantity of cart is ${cartQuantity}`)
                    liveCart();
                }
            }
            if (cartQuantity < 0){
                alert('There is no Items')
                cartQuantity = 0;
            } else {
                liveCart()
            }
        }
        
        function liveCart(){
           document.querySelector('.js-item').innerHTML = `Cart Quantity ${cartQuantity}`
        }