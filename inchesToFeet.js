// convert inches to feet

function inchesToFeet(inches){
    const feet = inches/12;
    return feet;
}

const myInches = 144;
const myFeet = inchesToFeet(myInches);
console.log('Ami ato feet: ', myFeet);

const myFriendInches = 156;
const myFriendFeet = inchesToFeet(myFriendInches);
console.log('Bondhu tui ato Feet: ', myFriendFeet);


// miles to kilometer convert

function milesToKilometer(miles){
    const kilometer = miles*1.609;
    return kilometer;
}

const twoMiles = 2;
const kiloM = milesToKilometer(twoMiles);
console.log('My Ans Is: ', kiloM)

// convert i dont know what is i cnvert

function convert(number){
    const takeNumber = number*2;
    return takeNumber;
}

const setNumber = 5;
const getNumber = convert(setNumber)
console.log('Your convert number is: ', getNumber);