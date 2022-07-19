'use strict';
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
    
};
/* let eachShopArea = [];
function shopArea(obj) {
    
    shoppingMallData.shops.forEach(function(item, i) {
        eachShopArea[i] = item.width * item.length;
    });
    console.log(eachShopArea);
}

shopArea(shoppingMallData);

let shopVolume = [];
eachShopArea.forEach(function(item, i) {
    shopVolume[i] = item*shoppingMallData.height;
});

console.log(shopVolume);
let budget = [];

shopVolume.forEach((element, i, shopVolume) => { 
    budget[i] = element * shoppingMallData.moneyPer1m3;
 });
 console.log(budget);

let sum = 0;

budget.forEach((element, i) => {
    sum += element;
});

console.log(sum);


let shopFirst = {...shoppingMallData.shops[0]};
console.log(shopFirst); */


function isBudgetEnough(data) {
    let eachShopArea = [];
    data.shops.forEach(function(item, i) {
        eachShopArea[i] = item.width * item.length;
    });
    let shopVolume = [];

    eachShopArea.forEach(function(item, i) {
        shopVolume[i] = item*data.height;
    });

    let budget = [];
    
    shopVolume.forEach((element, i, shopVolume) => { 
        budget[i] = element * data.moneyPer1m3;
     });

     let sum = 0;

    budget.forEach((element, i) => {
        sum += element;
    });

    if (data.budget - sum >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

let sortStudents;
/* sortStudents = students.sort();
console.log(sortStudents); */

function sortStudentsByGroups(arr) {
    sortStudents = arr.sort();
    let groupFirst = sortStudents.slice(0, 3);
    let groupSecond = sortStudents.slice(3, 6);
    let groupThird = sortStudents.slice(6, 9);
    let groupForth = sortStudents.slice(9);
    let strFourth = `Оставшиеся студенты: ${groupForth.join(', ')}`;
    
    let groupFinal = [groupFirst, groupSecond, groupThird, strFourth];

    if (groupForth.length == 0) {
        return [groupFirst, groupSecond, groupThird, 'Оставшиеся студенты: -'];
    }

    return groupFinal;


    
}

console.log(sortStudentsByGroups(students));
