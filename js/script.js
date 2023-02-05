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
let domani = new Date("2023-02-06 09:30");
console.log("in questo momento siamo a " + oggi.getTime() + " millisecondi");
console.log("domani alle 9:30 saremo a " + domani.getTime() + " millisecondi");


// domani - oggi ?
let tempo_che_ci_serve = domani - oggi;
console.log("il tempo da adesso fino alle 9:30 di domani è di " + tempo_che_ci_serve + " millisecondi");
 









/*******************************************************************************/
// OPS, mi sono dimenticata le timing functions!!
/*******************************************************************************/
// Versione tonta, senza timing functions (commento/scommento tutto insieme dalla riga sotto a questa):


// ok, in millisecondi :D e in TEMPO UMANO NORMALE?
/**
 * funzione per trasformare i millisecondi in secondi
 * 
 * @param ms millisecondi da trasfomare
 * 
 */
function transform_milliseconds(ms) {
    let sec = ms / 1000;

    return parseInt(sec);
}

// trasformo millisecondi in secondi
let my_time_in_seconds = transform_milliseconds(tempo_che_ci_serve);
// console.log("ti rimangono " + my_time_in_seconds + " secondi!");



// ..and then? altre funzioni?
/**
 * funzione per trasformare i secondi in minuti
 * 
 * @param sec secondi da trasfomare
 * 
 */
function transform_seconds(sec) {
    let min = sec / 60;

    return parseInt(min);
}



// ok, sapendo che in un giorno ci sono 86.400 secondi.. 
    // creo array per i giorni
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
    // console.log(sum);
    return sum
}

// Funziona la funzione?
// sum_array(array_giorni); 
// YES!!
let my_days = sum_array(array_giorni);
console.log("Mancano " + my_days + " giorni allo scadere del tempo!");


// ok, sapendo che in un ora ci sono 3600 secondi
    // creo array per le ore
    let array_ore = [];

for (let i = 0; i < 3600; i++) {

    if (my_time_in_seconds > 3600) {
        array_ore.push(parseInt(1));
        my_time_in_seconds = my_time_in_seconds - 3600;
        // console.log("yes");
    }
}
// console.log(array_ore);
// console.log(my_time_in_seconds);

let my_hours = sum_array(array_ore);
console.log("Mancano " + my_hours + " ore allo scadere del tempo!")


// e quindi, sapendo che in un minuto ci sono 60 secondi
    // creo array per i minuti
    let array_minuti = [];

for (let i = 0; i < 60; i++) {

    if (my_time_in_seconds > 60) {
        array_minuti.push(parseInt(1));
        my_time_in_seconds = my_time_in_seconds - 60;
        // console.log("yes");
    }
}
// console.log(array_ore);
// console.log(my_time_in_seconds);

let my_minutes = sum_array(array_minuti);
console.log("Mancano " + my_minutes + " minuti allo scadere del tempo!")


// e quindi quindi..
// console.log(my_time_in_seconds);
let my_seconds = my_time_in_seconds;
        // YESSSS


// in modo ordinato:
console.log("Ti rimangono ancora " + my_days + " giorni, " + my_hours + " ore, " + my_minutes + " minuti e " + my_seconds + " secondi allo scadere del tempo!");

// nell'html:
document.querySelector(".days").innerHTML = my_days;

document.querySelector(".hours").innerHTML = my_hours;

document.querySelector(".minutes").innerHTML = my_minutes;

document.querySelector(".seconds").innerHTML = my_seconds;

// ok, funziona.. adesso provo con le timing functions (vedi su!)