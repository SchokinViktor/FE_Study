// Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
// Висновок на екран з інформацією про автомобіль.
// Додавання водія, який має право керувати автомобілем.
// Заправка автомобіля.
// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
// Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передане кількість секунд.
// Зміни часу на передане кількість хвилин.
// Зміни часу на передане кількість годин.
// Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
// Максимум

// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// Складання 2-х об'єктів-дробів.
// Віднімання 2-х об'єктів-дробів.
// Множення 2-х об'єктів-дробів.
// Ділення 2-х об'єктів-дробів.
// Скорочення об'єкта-др


//Minimum 
function fillObject(object) {
    for (const key in object) {

        if(object[key] !== null) {
            continue;
        } else {
            car[key] = prompt(`Enter ${key}`);
        }
    }
}

function showObject(object) {

    for (const key in object) {
      if (typeof(object[key]) === 'object') {
          showObject(object[key]);
          continue;
      } else if (typeof(object[key]) === 'function'){
          continue;
      }
      console.log(`${key} is ${object[key]}`);
    }
    
}


const car = {
    producer: null,
    model: null,
    year: null,
    averageSpeed: null,
    gasAmount: null,
    averageGasCost: null,
    drivers: {
        viktor: true,
    },

    addDriver: function () {
        let newDriver = prompt('Enter the name of the new driver'),
            isAllowedToDrive = confirm('Is the new driver allowed to drive?');
        
        if (isAllowedToDrive) {
            this.drivers[newDriver] = isAllowedToDrive;
        } else {
            this.drivers[newDriver] = isAllowedToDrive;
        }
    },

    fillWithGas: function(newGas) {
        if (typeof(this.gasAmount) === 'string') {
            this.gasAmount = parseInt(this.gasAmount);
        }
        this.gasAmount += newGas;
        console.log(`You now have ${this.gasAmount} liters`);
    },

    calculateTime: function (path, driver) {
       if(!driver) {
            console.log('This person is not allowed to drive');
       } else {
            let time = path / ( parseInt(this.averageSpeed) );
            let restTime = Math.floor(time / 4);
            time += restTime;
            
            let gasOnPath = (parseInt(this.averageGasCost) / 100) * path;
            if ( gasOnPath > this.gasAmount) {
                console.log('You need to fill you gas tank!');
                return 'not enough fuel';
            } else {
                return Math.floor(time);
            }
       }
    },
};

fillObject(car);

car.addDriver();
car.addDriver();
showObject(car);

car.fillWithGas(231);

let killometers = prompt('Enter the killometers');
let theTimeINeed = car.calculateTime(killometers, car.drivers.viktor);
console.log(`The time you need to drive ${killometers} killometers is ${theTimeINeed} hours`);


//Норма
let userHours = +prompt('Enter hours');
let userMinutes = +prompt('Enter minutes');
let userSeconds = +prompt('Enter seconds');
let miliseconds = (+userHours * 60 * 60 * 1000) + (+userMinutes* 60 * 1000) + (+userSeconds * 1000);
let timer = {
    hours: userHours,
    minutes: userMinutes,
    seconds: userSeconds,
    totalMiliseconds: miliseconds, 

    rewriteTime: function (newDate) {
        this.hours = Math.floor( newDate / (60 * 60 * 1000) );
        this.minutes = ( Math.floor( newDate / (60 * 1000) % 60 ) );
        this.seconds = ( Math.floor( newDate / 1000) % 60 );
    },

    addHours: function (hoursToAdd) {
        this.totalMiliseconds += (hoursToAdd * 60 * 60 * 1000);
        let newDate = (new Date().getTime() + this.totalMiliseconds) - new Date().getTime();
        this.rewriteTime (newDate);
    },

    addMinutes: function(minutesToAdd) {
        this.totalMiliseconds += (minutesToAdd * 60 * 1000);
        let newDate = (new Date().getTime() + this.totalMiliseconds) - new Date().getTime();
        this.rewriteTime (newDate);
    },

    addSeconds: function (secondsToAdd) {
        this.totalMiliseconds += (secondsToAdd * 1000);
        let newDate = (new Date().getTime() + this.totalMiliseconds) - new Date().getTime();
        this.rewriteTime (newDate);
    }
 
};

timer.addHours(2);
console.log(timer);
timer.addMinutes(320);
console.log(timer);
timer.addSeconds(1212);
console.log(timer);


//Максимум

let fraction = {
    mainNumerator: 6,
    mainDivider: 3,

    addFraction : function() {
        let firstUserNumerator = prompt('Enter Numerator #1'),
            firstUserDivider = prompt ('Enter divider #1'),
            secondUserNumerator = prompt('Enter Numerator #2'),
            secondUserDivider = prompt ('Enter divider #2');
    
        this.mainDivider = firstUserDivider * secondUserDivider;
        this.mainNumerator = (firstUserNumerator * secondUserDivider) + (secondUserNumerator * firstUserDivider);
    },

    subtractFraction : function() {
        let firstUserNumerator = prompt('Enter Numerator #1'),
            firstUserDivider = prompt ('Enter divider #1'),
            secondUserNumerator = prompt('Enter Numerator #2'),
            secondUserDivider = prompt ('Enter divider #2');

    this.mainDivider = firstUserDivider * secondUserDivider;
    this.mainNumerator = (firstUserNumerator * secondUserDivider) - (secondUserNumerator * firstUserDivider);
    },

    multiplyFraction: function() {
        let firstUserNumerator = prompt('Enter Numerator #1'),
            firstUserDivider = prompt ('Enter divider #1'),
            secondUserNumerator = prompt('Enter Numerator #2'),
            secondUserDivider = prompt ('Enter divider #2');

        this.mainNumerator = firstUserNumerator * secondUserNumerator;
        this.mainDivider = firstUserDivider * secondUserDivider;
    },

    divideFraction: function() {
        let firstUserNumerator = prompt('Enter Numerator #1'),
            firstUserDivider = prompt ('Enter divider #1'),
            secondUserNumerator = prompt('Enter Numerator #2'),
            secondUserDivider = prompt ('Enter divider #2');
        
        this.mainNumerator = firstUserNumerator * secondUserDivider;
        this.mainDivider = firstUserDivider * secondUserNumerator;
    },

    
    reduceFraction : function () {
        switch (true) {
            case (!this.mainNumerator % this.mainDivider):
                this.mainNumerator = this.mainNumerator / this.mainDivider;
                this.mainDivider = 0;
                break;
            
            case (!this.mainDivider % this.mainNumerator):
                this.mainNumerator = this.mainDivider / this.mainNumerator;
                this.mainDivider = 0;
                break;

            case (!this.mainDivider % 2 && !this.mainNumerator % 2):
                this.mainNumerator /=2;
                this.mainDivider /= 2;
                break;

            case (!this.mainDivider % 3 && !this.mainNumerator % 3):
                this.mainNumerator /=3;
                this.mainDivider /= 3;
                break;

            case (!this.mainDivider % 5 && !this.mainNumerator % 5):
                this.mainNumerator /=5;
                this.mainDivider /= 5;
                break;
            
            default: console.log("The fraction can't be reduced");
            break;
        }
    },
};

fraction.addFraction();
fraction.subtractFraction();
fraction.multiplyFraction();
fraction.divideFraction();
fraction.reduceFraction();
