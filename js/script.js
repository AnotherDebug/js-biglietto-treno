/*
Calcolo del prezzo del biglietto del treno.
===========================================

1. Creare due variabili con prompt, una dove chiede il numero di chilometri da percorrere, una dove chiede l'età dell'utente;


inserire all'interno delle variabili parsInt per assicurare un valore numerico.

2. Creare una variabile con il prezzo al chilometro;

Creare due variabili con il valore dello sconto, uno per i minorenni, uno per gli over 65;

3. Applicare gli sconti in base all'età;



*/

// 1.

const kmTravel = 10; //parseInt(prompt('Quanti chilometri desideri percorrere?'));

const age = 65; //parseInt(prompt('Quanti anni hai?'));

let message;

// 2.

const price = 0.21;

const discountUnderAge = 0.2;

const discountOverAge = 0.4;

let ticket = kmTravel * price;

let ticketDiscountUnder = ticket - ticket * discountUnderAge;

let ticketDiscountOver = ticket - ticket * discountOverAge;

let ticketUnderAge = ticketDiscountUnder.toFixed(2);

let ticketOverAge = ticketDiscountOver.toFixed(2);

// 3.

if (age <= 17) {
  message = `Il prezzo del biglietto è pari a € ${ticketUnderAge}, con uno sconto applicato del 20%.`;
} else if (age >= 65) {
  message = `Il prezzo del biglietto è pari a € ${ticketOverAge}, con uno sconto applicato del 40%.`;
} else {
  message = `Il prezzo del biglietto è pari a € ${ticket}.`;
}



document.getElementById('output').innerHTML = message;