function calculateVolumeAndArea(cubeEdge) {
    if (cubeEdge <=0 || cubeEdge == '' || cubeEdge == null || isNaN(cubeEdge) || !Number.isInteger(cubeEdge)) {
        return('При вычислении произошла ошибка');
    } else {
        return(`Объем куба: ${cubeEdge * cubeEdge * cubeEdge}, площадь всей поверхности: ${cubeEdge * cubeEdge * 6}`);
    }

}
console.log(calculateVolumeAndArea(-15));

function getCoupeNumber(place) {
    if (place <0 || isNaN(place) || !Number.isInteger(place)) {
        return('Ошибка. Проверьте правильность введенного номера места');
    } else {
        if (place == 0 || place > 36) {
            return('Таких мест в вагоне не существует');
        }
    } 
   
        

        if (place % 4 == 0) {
            return(place / 4);
        } else 
        if (place % 4 < 2) {
            return(Math.round(place/4 + 1));
        } else {
            return(Math.round(place/4));
        }


}

console.log(getCoupeNumber("my"));

let place;
let i;
let result

if (place <= 4) {
    result = 1;
}

if (place <= 8 && place >4) {
    result = 2;
}

if (place <= 12 || place > 8) {
    result = 3;
}

function getTimeFromMinutes(minutes) {
    
    let a = Math.floor(minutes / 60);
    let b = minutes % 60;

    if (minutes < 0 || !Number.isInteger(minutes) ) {
        return('Ошибка, проверьте данные');
    }

    if (minutes >= 60 && minutes <= 120 ) {

        return(`Это ${a} час и ${b} минут`);
    }

    if (minutes >= 120 && minutes <= 300) {
        return(`Это ${a} часа и ${b} минут`);
    }

    return(`Это ${a} часов и ${b} минут`);
}

console.log(getTimeFromMinutes(4.5));

function findMaxNumber(a, b, c, d) {

    if(typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number" || typeof(d) !== "number") {
        return 0;
    } 
        
    return(Math.max(a, b, c, d));

    


}
console.log(findMaxNumber(1, 3, 4));

function fib(a) {
    let result = '';

    if (typeof(a) !== "number") {
        return 0;
    }

    for (let i = 1; i<=a; i++) {
        result += `${2 * i - 3}, `;
    }
    return (result);
    }
    
   
console.log(fib(4));
0, 1, 1, 2, 3, 5
th = 8;
f = 5;
s = 8;

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5);

function learnJS (lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS('JavaScript', function(){
    console.log(`Я прошел этот урок`);
});

const options = {
    name: 'test',
    width: 1280,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
};

/* for (let key in options) {console.log(`Свойство ${key} имеет значение ${options[key]}`)
} */

/* for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        } 
    }
    else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
} */

console.log(Object.keys(options));

const name = [
    'Masha', 'Vanya', 'Lena', 'Petya', 'Tom'
];
console.log(Object.keys(name).length);

const options = {
    name: 'test',
    width: 1280,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
};
const {border, bg} = options.colors;

console.log(border);

let menu = {
    drinks: {
        tea: 'black',
        juice: 'tomato',
        milk: 'milkshake'
    },
    mainmeal: {
        burger: 'bigmak',
        snack: 'fries'
    },
    desert: 'icecream',
    combo: 'big tasty'
};

/* let [tea, burger] = ['green', 'fish'];
console.log(tea, burger);
 */

let {tea, juice, milk} = menu.drinks;
console.log(tea, juice, milk);

const arr = [2, 3, 6, 8];
/* arr.pop();

arr.push(10); */

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} в массиве ${arr}`);

});

const a = 'Я хочу наконец спать';
const b = a.split(' ');
/* console.log(b); */
console.log(b.join(' '));

/* const obj = {
    a:5,
    b:1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj); */

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const newNumbers = copy(numbers);

const add = {
    a: 10,
    b: 15
};

const clone = Object.assign({}, add);
clone.a = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'hallo';
console.log(newArray);
console.log(oldArray);

const video = ['a', 'b', 'c'],
      blogs = ['d', 'e', 'f'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [1, 2, 3];
log(...num);

const object = {
    a: 1,
    b: 2
};

const copyObject = {...object};
console.log(copyObject);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let a = `Мне ${age} и я влядею языками: `;
        languages.forEach(function(lang) {
            a += `${lang.toUpperCase()} `;
        });
        return a;
    }
    
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));




function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));



function showProgrammingLangs(plan) {
    let obj = plan.skills.programmingLangs;
    let str = '';
    for (let key in obj) {
            str += `Язык ${key} изучен на ${obj[key]}\n`;
        }
    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let result = 'Семья состоит из: ';
    if (arr.length == 0) {
        return 'Семья пуста';
    }
    for (let name of arr) {
        result += `${name} `;
    }
    return result;
}
console.log(showFamily(family));

const names = ['Lena', 'Petya', 'Sasha'];

function standardizeStrings(arr) {
    for (let item of arr) {
        console.log(`${item.toLowerCase()}`);
    }
}
standardizeStrings(names);

const someString = 'This is some strange string';

const newString = someString.split('').reverse().join('');
console.log(newString);

someString.split([' ']);
/* const newString = someString.reverse(); */
console.log(someString);


const someString = 'This is some strange string';

function reverse(str) {
    if (str != 'string') {
        return 'Ошибка!';
    }
    const newString = str.split('').reverse().join('');
    return newString;
    }

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const all = [...baseCurrencies, ...additionalCurrencies];

/* let missingCurr = 'CNY';

function curr(arg) {
    return arg !== missingCurr;
}
const newAll = all.filter(curr);
console.log(newAll);

let c = 'Доступные валюты: \n';

for (let value of newAll) {
    c += `${value}\n`;
} */

/* console.log(c); */

function availableCurr(arr, missingCurr) {
    if (arr.length == 0) {
        return 'Нет доступных валют';
    }
    function curr(arg) {
        return arg !== missingCurr;
    }
    const newAll = all.filter(curr);
    
    let c = 'Доступные валюты: \n';

    for (let value of newAll) {
        c += `${value}\n`;
    }
    return c;
}

console.log(availableCurr(all, 'CNY'));

