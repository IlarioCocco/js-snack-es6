// Snack2

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// 1 Creare un array di oggetti di squadre di calcio
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squadraDiCalcio = [
{   
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti:0,
},

{
    nome: "MIlan",
    puntiFatti: 0,
    falliSubiti:0,
},

{
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti:0,
},

{
    nome: "Juve",
    puntiFatti: 0,
    falliSubiti:0,
},
];

for (let i = 0; i < squadraDiCalcio.length; i++ ){
    console.log(squadraDiCalcio[i].puntiFatti);
    console.log(squadraDiCalcio[i].falliSubiti);
    squadraDiCalcio[i].puntiFatti = rand(1, 100);  //nome della funzione ()
    squadraDiCalcio[i].falliSubiti = rand(1, 100); //nome della funzione ()
}
console.log(squadraDiCalcio);


// Generare numeri random al posto degli 0 nelle proprietà:
function rand(num1, num2) {
    return (Math.floor(Math.random() * num2) + num1);
}
console.log(rand(1, 100));



// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const {nome, falliSubiti} = squadraDiCalcio;
console.log(`nomi squadre: ${nome} e falli subiti: ${falliSubiti}`);