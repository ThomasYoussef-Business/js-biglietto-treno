"use strict";
/* ----------------- This method makes it so you don't need ----------------- */
/* ---------- a while loop to get float or int input from the user ---------- */
String.prototype.ext_promptForParsableFloat = function (errorMessage, keepAskingIfTrue) {
    let internalStringPlaceholder; // Strings are immutable, so we make our own placeholder
    const currentString = this.valueOf();
    const parsedValue = parseFloat(currentString);
    if (!isNaN(parsedValue) && !keepAskingIfTrue(parsedValue)) {
        return parsedValue; // If the parsed value is all good, just return that
    }

    // Otherwise, we start working with our placeholder
    while (isNaN(parseFloat(internalStringPlaceholder)) ||
        keepAskingIfTrue(parseFloat(internalStringPlaceholder))) {
        internalStringPlaceholder = prompt(errorMessage);
    }

    return parseFloat(internalStringPlaceholder);
}

/* --------------------------- Various extensions -------------------------- */
String.prototype.ext_promptForParsableInt = function (errorMessage, keepAskingIfTrue) {
    return parseInt(this.ext_promptForParsableFloat(errorMessage, keepAskingIfTrue));
}

Number.prototype.ext_promptForParsableFloat = String.prototype.ext_promptForParsableFloat
Number.prototype.ext_promptForParsableInt = String.prototype.ext_promptForParsableInt


/* -------------------------------------------------------------------------- */
/* Main script's logic                                                        */
/* -------------------------------------------------------------------------- */
let chilometriViaggio, etaUtente, prezzoFinale, sconto;

const ageInputError = `L'età inserita non è un numero valido
I bambini sotto ai 3 anni possono viaggiare senza biglietto.
Per favore inserisci un 'età sopra a 3 anni: `;
etaUtente = prompt("Per favore inserisci la tua età: ")
    .ext_promptForParsableInt(ageInputError, (x) => x < 3);

const kilometersInputError = `Il numero di chilometri inserito non è valido!
I chilometri devono essere più di zero: `;
chilometriViaggio = prompt("Per favore inserisci i chilometri che desidera viaggiare: ").ext_promptForParsableFloat(kilometersInputError, (x) => x <= 0);

if (etaUtente >= 65) {
    sconto = 0.60;
} else if (etaUtente < 18) {
    sconto = 0.80;
} else {
    sconto = 1
};

prezzoFinale = chilometriViaggio * 0.21 * sconto;
prezzoFinale = Math.round(prezzoFinale * 100) / 100;

console.log(`
    Per viaggiare ${chilometriViaggio}, ed avendo ${etaUtente} anni,
    Il prezzo finale è di €${prezzoFinale}
`);