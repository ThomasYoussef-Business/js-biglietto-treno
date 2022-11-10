"use strict";
let chilometriViaggio, etaUtente;

etaUtente = parseInt(prompt("Per favore inserisci la tua età: "))
while (isNaN(etaUtente) || etaUtente < 3) {
    etaUtente = parseInt(prompt(`L'età inserita non è un numero valido!
    I bambini sotto ai 3 anni possono viaggiare senza biglietto.
    Per favore inserisci un'età sopra a 3 anni: `))
}