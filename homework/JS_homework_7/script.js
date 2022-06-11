// Завдання 1

// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

 

// Завдання 2

// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.

// Продемонструй роботу написаних методів.


// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().


///TASK 1

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    getDiameter() {
        return this.radius *2;
    }

    setRadius(newRadius) {
        this.radius = newRadius;
    }

    calcArea() {
        return Math.PI * this.radius ** 2;
    }

    calcLength() {
        return 2 * Math.PI * this.radius;
    }

}

let circle = new Circle(4);
console.log(circle.getRadius());
console.log(circle.getDiameter());
circle.setRadius(6);
console.log(circle.getRadius());

console.log(circle.calcArea());
console.log(circle.calcLength());


///TASK 2

class Marker {
    constructor(color, numberOfInk) {
        this.color = color;
        this.numberOfInk = numberOfInk + '%';
    }

    writeText(text) {
        let lineOfText = '',
            inkLeft = parseInt(this.numberOfInk);

        for (let i = 0; i < text.length; i++) {
            
            if(inkLeft > 0) {
                lineOfText += text[i];
                if(text[i] != " ") {
                    inkLeft -= 0.5;
                }
            } else {
                break;
            }
        
        }

        this.numberOfInk = inkLeft + '%';
        console.log(lineOfText);
        console.log(`The percentnt of Ink is ${this.numberOfInk}`);
    }
}


class RewritableMarker extends Marker{
    constructor(color, numberOfInk) {
        super(color, numberOfInk);
    }

    fillWithInk(portionOfInk) {
        console.log('filling...');
        if ( parseInt(this.numberOfInk) + portionOfInk > 100) {
            this.numberOfInk = '100%';
        } else {
            this.numberOfInk = ( parseInt(this.numberOfInk)  + portionOfInk ) + '%';
        }

        console.log(`Now you have ${this.numberOfInk} of Ink`);
    }
}

// let newMarker = new Marker('red', 40);
// newMarker.writeText('Cool little guy');

let newRewritableMarker = new RewritableMarker('greeen', 10);
newRewritableMarker.writeText('Кошка муркошка шля по дорожке');
newRewritableMarker.fillWithInk(10);
newRewritableMarker.fillWithInk(320);


//Task 3
class Employee {
    constructor(name, age, duty) {
        this.name = name;
        this.age = age;
        this.duty = duty;
    }


}

let employeGeorge = new Employee('Gorge', 35, 'Guard'),
    employeHelen = new Employee('Helen', 29, 'Accountant'),
    employeZack = new Employee('Zack', 58, 'Consultant');

let bankEmployeeList = [employeGeorge, employeHelen, employeZack];


class EmpTable {
    constructor(EmployeeList) {
        this.EmployeeList = EmployeeList;
        this.htmlTable = ``;
    }

    

    getHtml() {
        const thisArray = this.EmployeeList;
        this.htmlTable += `<table>`;

        this.EmployeeList.forEach(item => {
            this.htmlTable += `\n<tr>\n <td>${item.name}</td> <td>${item.age}</td> <td>${item.duty}</td> \n</tr>`;
        });

        this.htmlTable += '\n</table>';
        
    }
}

let newEmpTalbe = new EmpTable(bankEmployeeList);
newEmpTalbe.getHtml();
console.log(newEmpTalbe.htmlTable);