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


пше

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