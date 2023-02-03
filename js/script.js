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
    // in un minuto 60 secondi
    // in un'ora 60 minuti (3600 secondi)
    // in un giorno 24 ore (86400 secondi)
let secondi_in_un_minuto = 60;
let calcolo_orario = setInterval(nome_a_caso, 1000);

function nome_a_caso() {
    ++secondi_in_un_minuto;

    let secondi = parseInt(secondi_in_un_minuto % 60); // OK
    // console.log(secondi);
    let minuti = parseInt((secondi_in_un_minuto / 60) % 60); // OK
    // console.log(minuti); 
    let ore = parseInt((secondi_in_un_minuto / 60 / 60) % 24); // OK
    // console.log(ore); 
    let giorni = parseInt(secondi_in_un_minuto / 60 / 60 /24); // OK
    // console.log(giorni);
}

// console.log("Da questo istante fino alle 9:30 di domani mancano " + )

// what now?
// BOH

