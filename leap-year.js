// Leap year check

function checkLeapYear(year){
  const takeYear = year%4;
  if(takeYear == 0){
    return true;
  }
  return false;
}
const isMyYear = 2022;
const checkYear = checkLeapYear(isMyYear);
console.log('My year is: ', checkYear);