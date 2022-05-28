let sum = 0.1 + 0.2;
console.log( +sum.toFixed(1) );

let string = "1";
let number = 2;
console.log(+string + number);

let gigabytesAmount = prompt('Enter the amout of gigs that you have');
const fileSize = 820;
alert('It will contain two files ' + (Math.floor(gigabytesAmount/820)) );

let money = prompt('How much money do you have?');
let priceOfChocolate = prompt ("How much is the chocolate");
let affordableChocolate = Math.floor(money/priceOfChocolate);
let change =  ((money/priceOfChocolate) - affordableChocolate).toFixed(2);
alert('You can buy ' + affordableChocolate + ' and your change will be ' + change);

let threeDigitNumber = prompt ('Enter the number that has three digits');
let fitstDigit = threeDigitNumber % 10;
let secondDigit = Math.floor(threeDigitNumber/ 10) % 10;
let thirdDigit = Math.floor(threeDigitNumber/100);
alert ("Reversed: " + (fitstDigit.toString() + secondDigit.toString() + thirdDigit.toString()) )

let bankSum = prompt ('Enter the sum you want to put in the bank');
const percent = 5;
let yearCharge = (bankSum * 5) / 100
alert('Your charge in two months will be: ' + (yearCharge /12) *2 );