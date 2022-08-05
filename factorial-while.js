// factorial run using function..

function wFactorial(number){
  let result = 1;
  let i = number;
  while(i>=1){
    result = result*i;
    i--;
  }
  return result;
}
const numberIs = 5;
const factorialIs = wFactorial(numberIs);
console.log(factorialIs);