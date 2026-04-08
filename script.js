`use strict`;

// Variabili e calcolo biglietto

const prezzo = 0.21;

let km = Number(prompt('Quanti km da percorrere?'));
let prezzoKm = prezzo*km;

// Check numero km

if (isNaN(km)){
    alert('Inserire un numero valido.');
}

let ageString = prompt('Quanti anni hai?');
let age = parseFloat(ageString);

let scontoMag;
let scontoEld;

if (age < 18) {
    console.log('Sconto minorenni applicato');
    scontoMag = ((prezzoKm*20)/100);
} else {
    scontoMag = 0;
}

if (age >= 65) {
    console.log('Sconto elderly applicato');
    scontoEld = ((prezzoKm*40)/100);
} else {
    scontoEld = 0;
}

let prezzoFinale = (prezzoKm - scontoMag - scontoEld);
const messaggio = (Math.round(prezzoFinale * 100) / 100).toFixed(2)

console.log(`Il tuo biglietto: €${messaggio}`);