// Factorial result check..

function factorial(number){
    let  result = 1;
    for(let i=number; i>=1; i--){
      result = result*i;
    }
    return result;
}

const numberIs = 4;
const factorialResult = factorial(numberIs);
console.log('The factorial', numberIs, factorialResult);