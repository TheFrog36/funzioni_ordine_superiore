function somma(numero1, numero2){
    return numero1 + numero2;
}

function sottrazione(numero1, numero2){
    return numero1 - numero2;
}

function moltiplicazione(numero1, numero2){
    return numero1 * numero2;
}

function divisione(numero1, numero2){
    return numero1 / numero2;
}

//funzione di ordine superiore
function esegui_operazione(numero1, numero2, operazione){
    return operazione(numero1, numero2);
}

console.log(esegui_operazione(5, 10, moltiplicazione))


console.log(esegui_operazione(7, 3,(n1, n2) => n1 % n2 ))

function genera_somma(numero_da_sommare){
    return (numero) => numero + numero_da_sommare;
}

const sommaTre = genera_somma(3);

console.log(sommaTre(50));

const testArray = [2, 6, 8, 7, 21, 2001, 5000, 3, 12];

const is_even = (number) => number % 2 === 0;
const is_odd = (number) => number % 2 === 1;
function is_greater_than_10(number){
    return number > 10;
}

const is_less_than_10 = (number) => number < 10

function filter(array, filter_function){
    const new_array = [];
    for(let i = 0 ;i < array.length; i++){
        const is_element_to_add = filter_function( array[i]);
        if(is_element_to_add) new_array.push(array[i]);
    }
    return new_array
}

console.log(testArray)
console.log(filter(testArray, is_even))
console.log(filter(testArray, is_greater_than_10))
console.log(filter(testArray, is_less_than_10))
console.log(testArray.filter(is_odd))



function add_one(array){
    const new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(array[i] + 1);
    }
    return new_array;
}

console.log(add_one(testArray))
function multiply_by_3(element){
    return element * 3;
}

console.log(testArray.map(multiply_by_3))
console.log(testArray.map((element) => element / 2))


const testArray4 = [2, 4, 7, -9, 1000, -45, 2, 12, 333, -1000, 123, 34];

const testArray5 = ["rosso", "verde", "giallo", "arancione", "magenta", "blu"];

const testArray6 = [true, "pippo", 204, "verde", 3000, 100, false];


/// filtrare testArray4 in modo che rimangono solo i numeri positivi
function isPositive(numero){
    return numero >= 0;
}

console.log('numeri positivi', testArray4.filter(isPositive));
console.log('numeri positivi', testArray4.filter((numero) => numero >= 0));

/// filtrare testArray4 in modo che rimangono solo i numeri divisibili per 3
function isDivisible3(numero){
    return numero % 3 === 0;
}

console.log('numeri divisibili per 3', testArray4.filter(isDivisible3));
console.log('numeri dvibili per 3', testArray4.filter((numero) => numero % 3 ===0));

/// filtrare testArray4 in modo che rimangono solo i numeri divisibili per 3 e 4

function isDivisible3or4(number){
    return (number % 3 === 0 || number % 4 === 0);
} 

console.log(testArray4.filter(isDivisible3or4));
console.log(testArray4.filter((number)=> number % 3 === 0 || number % 4 === 0));
    
/// filtrare testArray5 in modo che rimangono solo le stringhe più corte di 6 lettere

function lessThan6(word){
     return word.length < 6;
}
console.log('parole più corte di sei', testArray5.filter(lessThan6));
console.log('parole più corte di sei', testArray5.filter((word)=> word.length < 6)
/// filtrare testArray5 in modo che rimangono solo le stringhe che contengono la lettera 'n'

/// filtrare testArray6 in modo che rimangano solo i numeri 
/// mappare testArrays4 dividendo tutti i numeri per 3
/// mappare testArray4 facendo la radice quadrata di tutti i numeri
/// mappare testArray4 sommando uno solo ai numeri dispari
/// mappare testArray5 rendendo maiuscole la prima e l'ultima lettera di ogni parola
/// mappare testArray5 aggiungendo 