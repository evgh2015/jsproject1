'use strict';
/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {alert('Произошла ошибка!');} */


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    first: for (let i = 0; i < 2; i++) {
        const a = prompt('Назовите один из последних просмотренных фильмов', ''),
            b =  prompt('Насколько оцените его?', '');
            
            if (a === "" || a === null || a.length > 50 || b === "" || b === null || b.length > 50) {
                continue first;
            } else {        
                personalMovieDB.movies[a] = b;
            }
    
            
    }
}

/* rememberMyFilms(); */

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {alert('Произошла ошибка!');}

}

/* detectPersonalLevel();
 */
/* function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB.privat);
    }
}

showMyDB(); */

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

let genres = [];

function writeYourGenres() {
    for (let i = 1; i<4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }

}
writeYourGenres();


/* console.log(genres); */

/* console.log(personalMovieDB); */


/* const a = prompt('Назовите один из последних просмотренных фильмов', ''),
      b =  prompt('Насколько оцените его?', ''),
      c = prompt('Назовите один из последних просмотренных фильмов', ''),
      d = prompt('Насколько оцените его?', '');



personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
 */





/* const hamburger = true;
const fri = true;

if (hamburger && fri) {
    console.log('я сыт!');
}

console.log((hamburger && fri)); */

/* const hamburger = 2;
const fri = 1;
if (hamburger === 3 && fri) {
    console.log ('Все сыты!');
} else {
    console.log ('Мы уходим!');
} */

/* const hamburger = 2;
const fri = 0;
const cola = 0;

if (hamburger || fri || cola) {
    console.log ('Все довольны!');
} else {
    console.log ('Мы уходим!');
} */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}
 */
/* let result = '';
const lenth = 7;

for (let i = 1; i < lenth; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result); */
/* 
first: for (let i = 0; i < 3; i++) {
    console.log(`First level^ ${i}`);
    for (let j=0; j < 3; j++) {
        console.log(`Second level^ ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

let str = '';

loop1:
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);

for (let i = 5; i < 11; i++) {
    console.log(i);
}

for (let i = 20; i > 9; i--) {
    if(i===13) {
        break;
    }
    console.log(i);
} 



for (let i = 2; i < 11; i++) {
    if (i%2===1) {
        continue;
    }
    console.log(i);
}

let round = 2;

while (round < 11) {
    if (round % 2 === 0) {
        console.log (round);
    }
    round++;
}

for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
        continue;
     } else {
         console.log(i);
     }
 }

 let i = 2;
 while (i<=16) {
     if (i % 2 === 1) {
         console.log(i);
     }
     i++;
 }

 let arr = [];
 
 for (let i = 0; i < 6; i++) {
     arr [i] = i + 5;
 }

 console.log(arr);

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr [i];
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i<6; i++) {
    if (typeof(data[i]) === "number") {
        data[i] = data[i]*2;
    }
    if (typeof(data[i]) === "string") {
        data[i] = data[i] + " - done";
    }
}

console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
console.log(data.length);

const result = [];

for (let i = 0; i < data.length; i++) {
    result[i] = data[data.length - i - 1];
}
console.log(result);

const lines = 5;
let result = '';

for (let i = 0; i<=lines; i++) {
    for (let k = 0; k < lines-i; k++) {
        result += " ";
    }
    result += "*";
    for (let j = 0; j < i; j++) {
        result += "**";

    }
    result += "\n";
}

console.log(result); */
/* 
function showFirstMessage () {
    console.log('hello');
}
showFirstMessage ();

function ret() {
    let num = 50;
    return(num);
}
const anotherNum = ret();
console.log(anotherNum);

const usdCurr = 65;
const eurCurr = 80;

function convert (amount, curr) {
    console.log(amount * curr);
}

convert (100, usdCurr);
convert (100, eurCurr);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }

    console.log('Done');
}

test();

function sayHello(name) {
    return('Привет, ' + name);
}

sayHello('Антон');

function returnNeighboringNumbers(number) {
    return([number - 1, number, number + 1]);

}
console.log(returnNeighboringNumbers(5));

function getMathResult(base, repeat) {
    if (typeof(repeat) != "number" || repeat <= 0) {
        return(base);
    } else {
        let a = '';
        a += base;
        
        for (let i = 1; i < repeat; i++) {
            a += '---';
            a += base * (i+1);
        }
        return(a);
    }
}

console.log(getMathResult(5, 3));

let a = '';
let b = 2;
a += b;

a += '---';

a += b + b;

a += '---';

a += b + b + b;

console.log(a);

function getMathResult(base, repeat) {
    if (typeof(repeat) != "number" || repeat <= 0) {
        return(base);
    } else {
        let a = '';
        a += base;
        
        for (let i = 1; i < repeat; i++) {
            a += ('---' + `${base * (i+1)}`);

        }
        return(a);
    }
}

console.log(getMathResult(5, 3));

const str = "My very good mood";

/* console.log(str.slice(-4, -1)); */

/* console.log(str.substr(3, 4));

const test = '12.2px';
console.log(parseInt(test));
 */ 

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
        
        for (let i = 0; i <= a; i++) {
            result += `${i}, `;
            if (i > 2) {
                result += `${i + (i-1)}, `;
            }
            if (i == a) {
                result += `${i + (i-1)}`;
            }
    
        }

        return (result);
    }


    

console.log(fib(2));