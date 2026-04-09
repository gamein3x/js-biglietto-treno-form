`use strict`;

const clicker = submitBtn.addEventListener('click', function clicker() {

    // Recuperiamo i valori dagli input (sono stringhe, quindi usiamo Number)
    const km = Number(inputKm.value);
    const age = Number(inputAnni.value);
    // Validazione base
    if (isNaN(km) || km <= 0 || isNaN(age) || age <= 0) {
        resultDisplay.innerText = "Per favore, inserisci dati validi.";
        resultDisplay.style.color = "red";
        return; // Interrompe l'esecuzione se i dati sono errati
    }

    // Variabili e calcolo biglietto

    const prezzo = 0.21;

    //let km = Number(prompt('Quanti km da percorrere?'));
    let prezzoKm = prezzo * km;

    // Check numero km

    if (isNaN(km)) {
        alert('Inserire un numero valido.');
    }
    // let ageString = prompt('Quanti anni hai?');
    // let age = parseFloat(ageString);

    let scontoMag;
    let scontoEld;

    if (age < 18) {
        console.log('Sconto minorenni applicato');
        scontoMag = ((prezzoKm * 20) / 100);
    } else {
        scontoMag = 0;
    }

    if (age >= 65) {
        console.log('Sconto elderly applicato');
        scontoEld = ((prezzoKm * 40) / 100);
    } else {
        scontoEld = 0;
    }

    let prezzoFinale = (prezzoKm - scontoMag - scontoEld);
    const messaggio = (Math.round(prezzoFinale * 100) / 100).toFixed(2)

    console.log(`Il tuo biglietto: €${messaggio}`);
});

if (clicker) {
    submitBtn.style.color = "black"; // Ripristiniamo il colore se c'era un errore
    submitBtn.innerText = `Il tuo biglietto costa: €${messaggio}`;
}