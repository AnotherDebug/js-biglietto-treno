/*
Calcolo del prezzo del biglietto del treno.
===========================================

1. Creare due variabili con prompt, una dove chiede il numero di chilometri da percorrere, una dove chiede l'età dell'utente;

inserire all'interno delle variabili parsInt per assicurare un valore numerico.

2. Creare una variabile con il prezzo al chilometro;


*/



// 1.

const kmTravel = 10 //parseInt(prompt('Quanti chilometri desideri percorrere?'));

const age = 20 //parseInt(prompt('Quanti anni hai?'));



// 2.
const price = 0.21;

let ticket = kmTravel * price;




console.log(kmTravel);
console.log(age);
console.log(ticket);