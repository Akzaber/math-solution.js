// Check even or odd number

function isEven(number){
    if(number%2 == 0){
        return true;
    }
    else{
      return false;
    }
}
const myNumber = 500;
const getEvenOrOdd = isEven(myNumber);
console.log(getEvenOrOdd);