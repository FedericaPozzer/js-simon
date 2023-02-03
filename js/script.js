// console.log("Hello Kik");


// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!


// deve partire subito, quindi setInterval
// è un conto alla rovescia, quindi calcola quanto ci vuole e poi sottrai
    // che giorno è oggi? che giorno è domani?
    // oggi --> now / domani --> 9:30
    // sottraggo tempo fino a oggi da tempo fino a domani
    // tempo da oggi a domani trovato
    // imposto un countown
    // aiuto


// quando è oggi? quando sarà domani?
let oggi = new Date();
let domani = new Date("2023-02-04 09:30");
console.log("in questo momento siamo a " + oggi.getTime() + " millisecondi");
console.log("domani alle 9:30 saremo a " + domani.getTime() + " millisecondi");


// domani - oggi ?
let tempo_che_ci_serve = domani - oggi;
console.log("il tempo da adesso fino alle 9:30 di domani è di " + tempo_che_ci_serve + " millisecondi");


// ok, in millisecondi :D e in TEMPO UMANO NORMALE?
/**
 * 
 * funzione per trasformare i millisecondi in secondi
 * @param ms millisecondi da trasfomare
 * 
 */
function transform_milliseconds(ms) {
    let sec = ms / 1000;

    return parseInt(sec);
}

// trasformo millisecondi in secondi
let my_time_in_seconds = transform_milliseconds(tempo_che_ci_serve);
console.log("ti rimangono " + my_time_in_seconds + " secondi!");



// ..and then? altre funzioni?
/**
 * 
 * funzione per trasformare i secondi in minuti
 * @param sec secondi da trasfomare
 * 
 */
function transform_seconds(sec) {
    let min = sec / 60;

    return parseInt(min);
}

// trasformo secondi in minuti
let my_time_in_minutes = transform_seconds(my_time_in_seconds);
console.log("ti rimangono " + my_time_in_minutes + " minuti!");

// funziona ma non credo sia l'idea giusta :D





















/*************** disastro da cancellare eventually ***************/
/*************** not now perchè potrebbe servirmi qualcosa ***************/




// schif:
// // ok, in millisecondi :D e in TEMPO UMANO NORMALE?
//     // in un minuto 60 secondi
//     // in un'ora 60 minuti (3600 secondi)
//     // in un giorno 24 ore (86400 secondi)
// let secondi_in_un_minuto = 60;

// // let calcolo_orario = setInterval(nome_a_caso, 1000); // THIS??????????

// function nome_a_caso() {
//     ++secondi_in_un_minuto;

//     let secondi = parseInt(secondi_in_un_minuto % 60); // OK
//     // console.log(secondi);
//     let minuti = parseInt((secondi_in_un_minuto / 60) % 60); // OK
//     // console.log(minuti); 
//     let ore = parseInt((secondi_in_un_minuto / 60 / 60) % 24); // OK
//     // console.log(ore); 
//     let giorni = parseInt(secondi_in_un_minuto / 60 / 60 / 24); // OK
//     // console.log(giorni);

//     // return secondi, minuti, ore, giorni;
// }