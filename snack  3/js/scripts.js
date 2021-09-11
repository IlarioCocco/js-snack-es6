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


const possibileSoluzione = array_primario.filter(
    (elm, i)=> {
        // console.log(elm)
        return i >= 1 && i <= 3 ;
    }
); console.log(`gli estremi sono compresi tra 1 & 3 : ${possibileSoluzione}`)





// esercizio snack 3

// FOR EACH---------------------------

// const array_primario = ["alessandro", "barbara", "carlo", "dario", "emanuele"];
// console.log(array_primario);

// array_primario.forEach((element,index) => {
//     console.log(element, index);
//     if (element >= 1 && element <= 3 ){
       
//         console.log();
//     }
// }); 






// testing -------------FILTER

// const numeri = [0,1,2,3,45,67,33,22,43,5,6,4,9];
// console.log(numeri)

// const numeriPari = numeri.filter(
//     (elm)=> {
//         if (elm % 2 === 0 ){
// } );







// esercizio b
// filter

// const colori = ["rosso", "giallo", "verde", "viola"];

// const v = colori.filter(
//     (element) => { 
//         if (element[0] == "v")  {  
//             return true; 
//         }  
//         return false    
// });

// console.log(v);

// const v = colori.filter( (element) => element[0] == "v" );

// console.log(v);






// let ciao = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 0; i <= ciao.length; i++){
//     if(i == 6) {
//     console.log("ok sta funzionando sul numero 5 e lo sostituisco al numero"); 
//     continue
//     // break
//     }
//     console.log(i)
// }


// let i = 0;
// while (i <= ciao.length){
//     console.log(i)
//     if(i === 10);
//         // console.log("ok sta funzionando sul numero 10 e lo sostituisco al numero");
//         i++
// }
    



// let frutta = ["MELA", "BANANA",  "PERA", "ANGURIA"];
// for (let i = 0; i < frutta.length; i++) {
    
//     console.log(frutta[i]);
// }






// const array = [1,2, 3,4];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
// console.log(array);