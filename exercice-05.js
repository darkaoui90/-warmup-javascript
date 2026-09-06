const product = { name: "Mechanical Keyboard",
     price: 450, 
     stock: 12, 
     category: "Computer Science" };

     console.log("name of the produuct is " + product.name + " its price is" + product.price + "and stock available is" + product.stock 
        
      );


  product.price =  product.price + (product.price * 0.1)     ;


  console.log(product.price);

  product.Onsale = false ;

  console.log(product);


  for (const key in product ) {
    const value = product[key];

    console.log(`${key} : ${value}`);
  }

  function isAvailable(product) {

         if( product.stock > 0) {
            return true ; 
         }

         else {
            return false ;
         }
  }


console.log(isAvailable(product));