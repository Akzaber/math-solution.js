// find odd sum for array. using function

function sumNumber(numbers){
  let sum = 0;
  for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum+element;
    // console.log(index, element,sum);
  }
  return sum;
}

function sumOfOddNumber(numbers){
  let myArray = [];
  for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element%2 !== 0){
      // console.log(index, element);
      myArray.push(element)
    }
  }
  return myArray;
}

const myNumbers = [12, 24, 53, 54, 65, 70]
const givenOdd = sumOfOddNumber(myNumbers);
console.log(givenOdd);
const oddNumberSum = sumNumber(givenOdd);
console.log(oddNumberSum)

