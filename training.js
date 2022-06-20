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
