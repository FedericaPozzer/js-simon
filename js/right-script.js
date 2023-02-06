// console.log("Hello Kik");


// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!


// richiamo i miei elementi html e li assegno a delle variabili
const days_el = document.querySelector(".days");
const hours_el = document.querySelector(".hours");
const minutes_el = document.querySelector(".minutes");
const seconds_el = document.querySelector(".seconds");


// creo un set interval (assegnato a una variabile perchè poi mi servirà per stopparlo quando si arriva a zero)
let ciao = setInterval(function () {
    // a quanti millisecondi siamo adesso?
    const now = new Date();
    // a quanti millisecondi saremo domani alle 9:30?
    const tomorrow = new Date("2023-02-06 10:59");

    const ms_now = now.getTime();
    const ms_tomorrow = tomorrow.getTime();
    // tempo tra oggi e domani
    const ms_to_tomorrow = ms_tomorrow - ms_now;
    // trasformato in secondi
    const s_to_tomorrow = Math.floor(ms_to_tomorrow / 1000);


    // "separo" secondi, minuti, ore, giorni..
    const seconds = s_to_tomorrow % 60;
    // console.log(seconds);
    const minutes = parseInt(s_to_tomorrow / 60) % 60;
    const hours = parseInt(s_to_tomorrow / 60 / 60) % 24;
    const days = parseInt(s_to_tomorrow / 60 / 60 / 24);


    // li stampo nel mio html!
    seconds_el.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    minutes_el.innerHTML = (minutes < 10) ? "0" + minutes : minutes;
    hours_el.innerHTML = (hours < 10) ? "0" + hours : hours;
    days_el.innerHTML = (days < 10) ? "0" + days : days;


    // stoppo il conto alla rovescia quando arrivo a zero!
    if ((days == 0) && (hours == 0) && (minutes == 0) && (seconds == 0)) {
        clearInterval(ciao);
    } // smette ma se faccio refresh compare -cose 

    // un secondo alla volta!
}, 1000);



