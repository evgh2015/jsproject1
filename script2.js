'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {

        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        first: for (let i = 0; i < 2; i++) {
            const a = prompt('Назовите один из последних просмотренных фильмов', '').trim(),
                b =  prompt('Насколько оцените его?', '');
                
                if (a === "" || a === null || a.length > 50 || b === "" || b === null || b.length > 50) {
                    continue first;
                } else {        
                    personalMovieDB.movies[a] = b;
                }
        
                
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else {alert('Произошла ошибка!');}
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        

        for (let i = 1; i<2; i++) {

 /*            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
             if (genre =='' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
             } else {
                personalMovieDB.genres[i-1] = genre;
             } */

/*             personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (personalMovieDB.genres[i-1] == '' || personalMovieDB.genres[i-1] == null) {
                personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            } */
        
                let genres = prompt('Введите ваши любимые жанры через запятую');

                if (genres =='' || genres == null) {
                    console.log('Вы ввели некорректные данные');
                    i--;
                 } else {
                    personalMovieDB.genres = genres.split(', ');
                 }
        
        }


        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });

    },
    toggleVisibleMyDB: function() {
        /* personalMovieDB.privat = !personalMovieDB.privat; */
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();