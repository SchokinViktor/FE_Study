// let userAge = prompt ('Enter your age: ');

// switch (true) {
//     case (userAge >= 0 && userAge <= 12):
//         alert('You are a child');
//         break;
    
//     case (userAge >= 12 && userAge <= 17):
//         alert('You are a teen');
//         break;

//     case (userAge >= 18 && userAge <= 58):
//         alert('You are an adult');
//         break;
    
//     case (userAge >= 60):
//     alert('You are an old person');
//     break;
//
//     default: alert ('wrong age');
// }


// let userSymbol = +prompt('Enter your number');

// switch (userSymbol) {
//     case 1: alert('!');
//         break;
        
//     case 2: alert ('@');
//         break;

//     case 3: alert ('#');
//         break;

//     case 4: alert ('$');
//         break;

//     case 5: alert ('%');
//         break;

//     case 6: alert ('^');
//         break;

//     case 7: alert ('&');
//         break;

//     case 8: alert ('*');
//         break;

//     case 9: alert ('(');
//         break

//     default: alert ('there is no symbol for this number');
// }

// let startNumber = +prompt ('Enter first number');
// let endNumber = +prompt ('Enter second number');

// for (let i = (startNumber + 1); i < endNumber; i++) {
//     console.log(i);
// }


// let firstNumber = +prompt ('Enter first number');
// let secondNumber = +prompt ('Enter second number');
// let NOD = 1;

// let tempFirstNumber;
// let tempSecondNumber;

// if (firstNumber > secondNumber) {
//     tempFirstNumber = firstNumber;
//     tempSecondNumber = secondNumber;
// } else {
//     tempFirstNumber = secondNumber;
//     tempSecondNumber = firstNumber;
// }


// while(true) {
//     tempNOD = tempSecondNumber;
//     tempSecondNumber = tempFirstNumber % tempSecondNumber;
//     tempFirstNumber = temp;

//     if (!tempSecondNumber) {
//         NOD = tempNOD;
//         break;
//     }
// }

// alert (NOD);


// let userDivideNumber = +prompt('Enter the number');
// for (let i = 1; i <= userDivideNumber; i++) {
    
//     if (userDivideNumber % i == 0) {
//         console.log(i)
//     }
// }


// let fivePartNumber = prompt('Enter the number with five parts')
// let flag = true;
// for (let i = 0; i < Math.floor(fivePartNumber.length / 2); i++) {
//     if (fivePartNumber[i] != fivePartNumber[fivePartNumber.length - (i+1)]) {
//         flag = false;
//         break;
//     }
// }

// //(flag) ? alert('polindrom') : alert ('not a polidrom')

// if (flag) {
//     alert('polindrom');
// } else {
//     alert ('not a polidrom');
// }


// let sum = +prompt('Enter the sum you have');

// switch (true) {
//     case (sum >= 200 && sum < 300) :
//         alert (sum * 0.03);
//         break;
//     case (sum >= 300 && sum < 500) :
//         alert (sum * 0.05);
//         break;
//     case (sum >= 500) :
//         alert (sum * 0.07);
//         break;
// }


// let numberChangable;
// let negativeNumbersCounter = 0;
// let positiveNumbersCounter = 0;
// let pairNumbersCounter = 0;
// let zeroCounter = 0;
// for (let i = 0; i < 10; i++) {
//     numberChangable = +prompt('Enter the number you want')
//     switch (true) {
//         case (numberChangable == 0): zeroCounter++;
//         case (numberChangable < 0): negativeNumbersCounter++;
//         case (numberChangable > 0): positiveNumbersCounter++;
//         case (numberChangable % 2 == 0): pairNumbersCounter++; 
//     }
// }
// alert('You have: \n' + "Positive numbers: " + positiveNumbersCounter + '\n' + "Negative numbers: " + negativeNumbersCounter + '\n' + "Nulls: " + zeroCounter + '\n' + "Pair numbers: " + pairNumbersCounter);


// let checkNextDay = true;
// let i = 0;
// while (checkNextDay) {

//     i = (i > 6) ? i = 0 : i=i;

//     switch(i) {
//         case 0 : alert("Monday");
//             break;
//         case 1 : alert ('Tuesday');
//             break;
//         case 2 : alert ('Wednesday');
//             break;
//         case 3 : alert ('Thursday');
//             break;
//         case 4 : alert('Friday');
//             break;
//         case 5 : alert ('Saturday');
//             break;
//         case 6: alert ('Sunday');
//             break;
//     }
//         i++;
//     checkNextDay = confirm('Do you want to continue?')
// }