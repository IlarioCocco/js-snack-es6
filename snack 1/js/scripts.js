// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore


// Creare un array [] di oggetti {} in questo caso si tratta di (bici):
const oggettiBici = [
    { nome: "bici_uno", pesoKg: 40 },
    { nome: "bici_due", pesoKg: 15 },
    { nome: "bici_tre", pesoKg: 20 },
];


let biciclettaLeggera = oggettiBici[0];
// creo un ciclo for decrementale in positivo  per ciclare all' interno dell array
// creandomi una variabile (let) a cui darò nome biciclettaLeggera; let biciclettaLeggera 
// let biciclettaLeggera sarà utilizzata come variabile di confronto 
// attraverso un if (....) {....} , 
// quindi :  if  variabile oggettiBici[i].pesoKg  <  variabile biciclettaLeggera.pesoKg  
// quet'ultima risulterà la più leggera visto che ha un valore numerico più piccolo in {pesoKg: 15}

for (let i = 0; i < oggettiBici.length; i++) {
    if (oggettiBici[i].pesoKg < biciclettaLeggera.pesoKg) {
        biciclettaLeggera = oggettiBici[i];
    }

}

// Stampare a schermo la bici con peso minore possibilmente applicando il (template literal)
console.log(`la bicicletta più leggerà è bici_due = ${biciclettaLeggera.pesoKg} kg / applicato il (template literal)`);
