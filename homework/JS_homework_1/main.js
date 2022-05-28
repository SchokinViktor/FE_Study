//medium
let userName = prompt('What is your name?');
alert ('Hello' + ' ' + userName);

let date = new Date();
const currentYear = date.getFullYear();
let userBirthYear = parseInt(prompt ('In what year you were born?'));
alert ('You are ' + (currentYear - userBirthYear) + ' years old');

let squareSideLength = prompt('Please enter the length of the side of the square');
alert ('the perimeter of your square is ' + (squareSideLength * 4) + ' centimeters');

//maximum
let radius = prompt ('Enter the radius of your circle');
const pi = 3.14;
alert ('the area of your circle is ' + (pi * (radius* radius)) ); 

let distanse = prompt('Enter the distanse in killometers between two towns');
let time = prompt('Enter in what time in hours you want to move from town to town');
let speed = distanse / time;
alert ('the speed is ' + speed + "killometers in hours");

const euroToDollarRate = 0.93;
let dollarAmount = prompt('How many dollars do you have?')
alert ('In euros it will be: ' + (dollarAmount * euroToDollarRate));


