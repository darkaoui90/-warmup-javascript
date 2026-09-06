for (let i=10 ; i>=1 ; i--) {
    console.log(i);
    



    if(i===1) {
        console.log("LIFTOFF");
    }
}
let sum =0 ; 

for (let j = 1 ; j<=100 ; j++) {

    sum += j ; 
}

console.log("sum from 1 to 100 is : " + sum);
console.log("\n");
console.log("Even numbers: ");
for (let k = 1 ; k <=20 ; k++) {
    if  (k % 2 === 0 ) {
        process.stdout.write(k + " ");
    }
}