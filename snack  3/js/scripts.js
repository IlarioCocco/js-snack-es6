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

// const arr = ["andrea", "barbara", "carlo", "dario", "emanuele"];

// console.log(arr);


// const argomentiArray = (arr, a, b) => {
//      return  arr.filter(
//         (elm, i) => {
//             return i >= a && i <= b; //entrambi vere quindi true
//         }
//     );
// }


// const newArray = argomentiArray(arr, 1, 3)
// console.log(`gli estremi sono compresi tra 1 & 3 : ${newArray}`)







// destrutturazione(Destructuring assignment)
// const arr = ["andrea", "barbara", "carlo", "dario", "emanuele"]; //array
// console.log(arr); //stampa array


// const argomentiArray = (arr, a, b) => arr.filter( (elm, i)  =>  i >= a && i <= b); //funzione scorciatoia con filter destrutturazione fatto pecedentemente con ciclo filter su più righe e forEach e for)

// const newArray = argomentiArray(arr, 1, 3); //richiamo funzione

// console.log(`gli estremi sono compresi tra 1 & 3 : ${newArray}`) //stampa







// esercizio snack 3

// FOR EACH-----------------------


// const argomentiArray = (arr, a, b) => {
//     const arrayTemporaneo = [];

//     arr.forEach(
//         (element, index) => {
//             if (index >= a && index <= b) {
//                 arrayTemporaneo.push(element);
//             }
//         }
     
//     );
//     return arrayTemporaneo;
// }



// const arr = ["a", "b", "c", "d", "e"];

// const newArray = argomentiArray(arr, 1, 3)
// console.log(newArray);



