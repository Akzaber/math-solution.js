// Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.

function hourIs(hour){
  let minutes = hour * 60;
  return minutes;
}
const takeHour = 12;
const minuteIs = hourIs(takeHour);
console.log(takeHour, 'hour = min: ', minuteIs) 