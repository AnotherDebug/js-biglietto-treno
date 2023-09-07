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

const kmTravel = 10 //parseInt(prompt('Quanti chilometri desideri percorrere?'));

const age = 20 //parseInt(prompt('Quanti anni hai?'));



// 2.

const price = 0.21;

const discountUnderAge = 0.20;

const discountOverAge = 0.40;

let ticket = kmTravel * price;

let ticketUnderAge = ticket - (ticket * discountUnderAge);

let tickeOverAge = ticket - (ticket * discountOverAge);





// 3.





console.log(kmTravel);
console.log(age);
console.log(ticket);
console.log(ticketUnderAge);
console.log(ticketOverAge);