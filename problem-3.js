// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.


function findOddSum(numbers){
  let sumOddNumbers = 0;
  let oddNumbersArray = [];
  for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element%2 !== 0){
      oddNumbersArray.push(element)
      sumOddNumbers = sumOddNumbers + element;
    }
  }
  return sumOddNumbers;
}
const arrayNumberIs = [5, 7, 8, 10, 45, 30];
const findOddSumNumbers = findOddSum(arrayNumberIs)
console.log(findOddSumNumbers)