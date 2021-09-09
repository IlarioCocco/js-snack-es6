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
    puntiFatti: function() {
        var numeroRandom = (Math.floor(Math.random() * 100) + 1);
        console.log("numeri Random:" + numeroRandom)
    }
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


// Generare numeri random al posto degli 0 nelle proprietà:
var numeroRandom = (Math.floor(Math.random() * 100) + 1);
console.log("numeri Random:" + numeroRandom)


// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
// solo nomi e falli subiti e stampiamo tutto in console.
const {nome, falliSubiti} = squadraDiCalcio;
console.log(`nomi e falli subiti delle rispettive squadre di serie A: ${squadraDiCalcio.nome} ${squadraDiCalcio.falliSubiti}`);