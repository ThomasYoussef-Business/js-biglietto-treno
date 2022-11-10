"use strict";
let chilometriViaggio, etaUtente, prezzoFinale, sconto;

etaUtente = parseInt(prompt("Per favore inserisci la tua età: "));
while (isNaN(etaUtente) || etaUtente < 3) {
    etaUtente = parseInt(prompt(`L'età inserita non è un numero valido!
    I bambini sotto ai 3 anni possono viaggiare senza biglietto.
    Per favore inserisci un'età sopra a 3 anni: `));
}

chilometriViaggio = parseFloat(prompt("Per favore inserisci i chilometri che desidera viaggiare: "));
while (isNaN(chilometriViaggio) || chilometriViaggio <= 0) {
    chilometriViaggio = parseFloat(prompt(`L'età inserita non è un numero valido!
    I bambini sotto ai 3 anni possono viaggiare senza biglietto.
    Per favore inserisci un'età sopra a 3 anni: `));
}

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