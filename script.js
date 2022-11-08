let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let colorepreferito = prompt("Inserisci il tuo colore preferito");
let numero1 = prompt("Inserisci il primo numero da dividere:");
let numero2 = prompt("Inserisci il secondo numero da dividere:");

let divisione = numero1/numero2;


console.log( nome + cognome + colorepreferito + divisione);

document.getElementById("p-nome").innerHTML = nome;
document.getElementById("p-cognome").innerHTML = cognome;
document.getElementById("p-colorepreferito").innerHTML = colorepreferito;