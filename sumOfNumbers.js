// sum 1-10 numbers using function.

function sumOfNumbers(number){
  let sum = 0;
  for(let i=1; i<=number; i++){
    sum = sum+i;
  }
 return sum; 
}

const numberEqual = sumOfNumbers(100000);
console.log(numberEqual)