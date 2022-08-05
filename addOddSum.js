// Take an array and find the sum of odd number and even number.

function addOddEvenNumbers(numbers){
  let sum = 0;
  for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum + element;
  }
  return sum;
}

function sumOfOddEven(numbers){
  let oddEvenArray = [];
  for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[i];
    if(element%2 === 0){
      oddEvenArray.push(element)
    }
  }
  return oddEvenArray;
}

const myNumbers = [20, 25, 35, 39, 30, 43, 53, 60, 70, 80];

const oddEvenNumbers = sumOfOddEven(myNumbers)
console.log(oddEvenNumbers);

const sumOfOddEvenNumbers = addOddEvenNumbers(oddEvenNumbers)
console.log(sumOfOddEvenNumbers)
// const callOddEven = addOddEvenNumbers(myNumbers);
// console.log('The sum of this numbers is: ', callOddEven);