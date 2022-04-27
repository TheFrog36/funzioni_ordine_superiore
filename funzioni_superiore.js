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
