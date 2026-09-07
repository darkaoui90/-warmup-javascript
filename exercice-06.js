const cart = [ { name: "Mouse", price: 150, quantity: 2 },
     { name: "Headphones", price: 400, quantity: 1 },
      { name: "Mouse Pad", price: 60, quantity: 3 }, 
      { name: "Webcam", price: 520, quantity: 1 }
    
    ];


    const updated = cart.map( cart => cart.name);



    console.log(updated);



    const total = cart.map  (article => {
  return {
  nom :  article.name , total : article.price * article.quantity
  }
})
console.log(total) ;



const max = cart.filter (article => article.price > 100) .map(article => article.name) ;
console.log(max) ;

