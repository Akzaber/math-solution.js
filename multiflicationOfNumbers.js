// multiflying the numbers .\


function multiflicationOfNumbers(number){
  let result = 1;
  for(i=1; i<number; i++){
    result = i * result
  }
  return result;
}

const numberResult = multiflicationOfNumbers(4);
console.log(numberResult);