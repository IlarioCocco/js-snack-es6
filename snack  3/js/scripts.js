// Snack 3

// Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.




// let array_primario = ["a", "b", "c", "d", "e"];

// let possibileSoluzione = soluzione(array_primario, 2, 4);
// console.log(possibileSoluzione);

// // La funzione ritornerà un nuovo array con i valori che hanno la posizione
// // compresa tra “a” e “b”
// function soluzione(array_primario, num1, num2) {
//     let array_secondario = [];
//     for (let i = 0; i < array_primario.length; i++) {
//         //console.log()array_primario[i];
//         if (i >= num1 && i <= num2) {
//             array_secondario.push(array_primario[i]);
//         }

//     }
//     return array_secondario;
// }





// Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



// esercizio snack 3

// FILTER---------------------------

const array_primario = ["andrea", "barbara", "carlo", "dario", "emanuele"];
console.log(array_primario);

// const possibileSoluzione = array_primario.filter(
//     (elm, i) => {
//         return i >= 1 && i <= 3 ;
//     }
// ); console.log(`gli estremi sono compresi tra 1 & 3 : ${possibileSoluzione}`)




const possibileSoluzione = array_primario.filter((i) => { return i >= 1 && i <= 3;}); 
console.log(`gli estremi sono compresi tra 1 & 3 : ${possibileSoluzione}`)



// esercizio snack 3

// FOR EACH-----------------------

// const array_primario = ["a", "b", "c", "d", "e"];
// console.log(array_primario);

// array_primario.forEach((element, index) => {
//     // console.log(element, index);
//     if (index >= 1 && index <= 3 ){
       
//         console.log(element);
//     }
// }); 








