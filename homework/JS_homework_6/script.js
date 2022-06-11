// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// Створення списку (не) придбаних продуктів.
// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)


//Минимум
let productsList = [{
    productName: 'Apple',
    amount: 10,
    isSold: false,
    priceForOne: 10,
    priceTotal: 100,
},
{   productName: 'Chocolate',
    amount: 7,
    isSold: true,
    priceForOne: 30,
    priceTotal: 210,
},

{ productName: 'Juice',
    amount: 20,
    isSold: false,
    priceForOne: 15,
    priceTotal: 300,
},

];

function checkIsSold(product) {
    if(product.isSold == true) {
        return true;
    } else{
        return false;
    } 
}

function createUnsoldProductList(arr) {
    let unsoldProductList = [];
    
    arr.forEach( (item, i) => {
        if( checkIsSold(arr[i]) ) {
            unsoldProductList[i] = item;
        }
    });

    if (unsoldProductList.length == 0) {
        return 'there are no product that have been sold!';
    } else {
        return unsoldProductList;
    }
}


function showProductsList(arr) {
    console.log('Unsold products: ');
    arr.forEach( item => {
        if(!checkIsSold(item)) {
            console.log(item);
        }
    });

    console.log('Products that have been sold: ');
    let unsoldList = createUnsoldProductList(arr);
    unsoldList.forEach(item => {
        console.log(item);
    });
}

showProductsList(productsList);

// Норма

function deleteProduct(product, arr) {
    let newArray = {};

    for (let i = 0; i < arr.length; i++) {
        if(arr[i].productName == product) {
            continue;
        } else {
            newArray[i] = arr[i];
        }
    }

    return newArray;
}

let deletedProductList = deleteProduct('Chocolate', productsList);
console.log('Deleted product list: ');
console.log(deletedProductList); 

function addProduct (newProduct, arr) {
    let isTheProductTheSame = false;

    for (const item of arr) {
         if(item.productName == newProduct.productName) {
            item.amount += newProduct.amount;
            item.priceTotal += newProduct.amount * item.priceForOne;
            isTheProductTheSame = true;
            break;
        }
    }

    if(isTheProductTheSame) {
        console.log(`Added ${newProduct.productName} again`);
    } else {
        arr.push(newProduct);
    }
}

let sameProductApple = {
    productName: 'Apple',
    amount: 3,
    isSold: false,
    priceForOne: 10,
    priceTotal: 100,
};

let newProductGrape = {
    productName: 'Grape',
    amount: 6,
    isSold: false,
    priceForOne: 13,
    priceTotal: 78,
};

addProduct(newProductGrape, productsList);
console.log('Added grape: ');
console.log(productsList);

addProduct(sameProductApple, productsList);
console.log(productsList);


//Максимум

function calculateTotalSum (arr) {
    let totalSum = 0;
    
    arr.forEach(item => {
        totalSum += item.priceTotal;
    });

    return totalSum;
}

let totalSum = calculateTotalSum(productsList);
console.log('Total sum ' + totalSum);

function calculateUnsoldSum(arr) {
    let unsoldSum = 0;
    let unsoldProductsList = createUnsoldProductList(arr);

    unsoldProductsList.forEach(item => {
        unsoldSum += item.priceTotal;
    });

    return unsoldSum;
}

let unsoldSum = calculateUnsoldSum(productsList);
console.log('Total unsoledSum: ' + unsoldSum);

function showSortedProductList(howToSort, arr) {
    // let totalSumArr = [];
        
    // arr.forEach( (item, i) => {
    //     totalSumArr[i] = item.priceTotal;
    // });

    // if (howToSort == '+') {
    //     console.log('Sorted from highest to lowest: ');
    //     totalSumArr.sort((a, b) => b - a);

    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = 0; j < arr.length; j++) {
    //             if (arr[i].priceTotal == totalSumArr[j]) {
    //                 console.log(arr[j]);
    //             }
    //         }
    //     }   

    // } else if (howToSort == '-') {
    //     console.log('Sorted from lowest to highest: ');
    //     totalSumArr.sort();

    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = 0; j < arr.length; j++) {
    //             if (arr[i].priceTotal == totalSumArr[j]) {
    //                 console.log(arr[j]);
    //             }
    //         }
    //     }   

    // } else {
    //     return "Can't sort with unknown method";
    // }

    if (howToSort === "+") {
        arr.sort((a, b) => b.priceTotal - a.priceTotal);
    } else {
        arr.sort((a, b) => a.priceTotal - b.priceTotal);
    }
}

showSortedProductList('+', productsList);
showSortedProductList('-', productsList);