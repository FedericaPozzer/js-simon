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
let domani = new Date("2023-02-08 09:30");
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

// trasformo secondi in minuti --- funziona ma non credo sia l'idea giusta :D
// let my_time_in_minutes = transform_seconds(my_time_in_seconds);
// console.log("ti rimangono " + my_time_in_minutes + " minuti!");



// ok, sapendo che in un giorno ci sono 86.400 secondi.. (3600 in un'ora)
    // creo array per le ore
    let array_giorni = [];
    
for (let i = 0; i < 86400; i++) {

    if (my_time_in_seconds > 86400) {
        array_giorni.push(parseInt(1));
        my_time_in_seconds = my_time_in_seconds - 86400;
        // console.log("yes");
    }
}
// console.log(array_giorni);
// console.log(my_time_in_seconds);

/**
 * funzione per sommare i numeri all'interno di un array
 * 
 * @param {*} array contenente numeri che voglio sommare tra loro
 * @returns la somma dei numeri contenuti nell'array
 * 
 */
function sum_array (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
    return sum
}

// Funziona la funzione?
// sum_array(array_giorni);
// YES!!
let my_days = sum_array(array_giorni);
console.log("Mancano " + my_days + " giorni allo scadere del tempo!");

