// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

function findLeapYear(year){
  let newArray = [];
  for(let i=0; i<year.length; i++){
    const index = i;
    const element = year[i];
    if(element%4 === 0){
      newArray.push(element)
    }
  }
  return newArray;
}

const yearWillBe = [2023,2024,2025,2028,2030,2020,2050,2044];
const yearIs = findLeapYear(yearWillBe)
console.log('These Years are: ', yearIs, 'Leapyear')