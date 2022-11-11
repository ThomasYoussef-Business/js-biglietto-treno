"use strict";
/* ----------------- This method makes it so you don't need ----------------- */
/* ---------- a while loop to get float or int input from the user ---------- */
function ensureFloatFromPrompt(firstPromptMessage, errorMessage, keepAskingIfTrue) {
    let parsedValue = parseFloat(prompt(firstPromptMessage));
    if (!isNaN(parsedValue) && !keepAskingIfTrue(parsedValue)) {
        return parsedValue; // If the parsed value is all good, just return that
    }

    // Otherwise, keep asking until it is
    while (isNaN(parseFloat(parsedValue)) ||
        keepAskingIfTrue(parseFloat(parsedValue))) {
        parsedValue = prompt(errorMessage);
    }

    return parseFloat(parsedValue);
}

// To get an integer version, let's just get the float version and parse to int
function ensureIntFromPrompt(firstPromptResult, errorMessage, keepAskingIfTrue) {
    return parseInt(ensureFloatFromPrompt(firstPromptResult, errorMessage, keepAskingIfTrue));
}

/* -------------------------------------------------------------------------- */
/* Main script's logic                                                        */
/* -------------------------------------------------------------------------- */
let chilometriViaggio, etaUtente, prezzoFinale, sconto;

const ageInputError = `L'età inserita non è un numero valido
I bambini sotto ai 3 anni possono viaggiare senza biglietto.
Per favore inserisci un 'età sopra a 3 anni: `;
etaUtente = ensureIntFromPrompt("Per favore inserisci la tua età: ", ageInputError, (x) => x < 3)

const kilometersInputError = `Il numero di chilometri inserito non è valido!
I chilometri devono essere più di zero: `;
chilometriViaggio = ensureFloatFromPrompt("Per favore inserisci i chilometri che desidera viaggiare: ", kilometersInputError, (x) => x <= 0)

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
    Per viaggiare ${chilometriViaggio} kilometri, ed avendo ${etaUtente} anni,
    Il prezzo finale è di €${prezzoFinale}
`);