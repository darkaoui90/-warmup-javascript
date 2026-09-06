const temperatures = [-5 ,10 , 22 ,34] ;


function celsiusVersFahrenheit(number){

     return (number * (9/5)) + 32 ;




};

function decrireTemperature(number) {
    if(number < 10)
       return "Froid" 
    else if (number >10 && number < 25)
       return "Doux"
    else if (number > 25 )
      return "chaud"  
}




celsiusVersFahrenheit(5);

console.log(celsiusVersFahrenheit(5));
console.log(decrireTemperature(12));