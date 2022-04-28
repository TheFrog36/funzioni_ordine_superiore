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
console.log('numeri positivi (lambda function)', testArray4.filter((numero) => numero >= 0));


/// filtrare testArray4 in modo che rimangono solo i numeri divisibili per 3
function isDivisible3(numero){
    return numero % 3 === 0;
}
console.log('numeri divisibili per 3', testArray4.filter(isDivisible3));
console.log('numeri dvibili per 3 (lambda function)', testArray4.filter((numero) => numero % 3 ===0));


/// filtrare testArray4 in modo che rimangono solo i numeri divisibili per 3 e 4
function isDivisible3or4(number){
    return (number % 3 === 0 || number % 4 === 0);
} 
console.log('numeri divisibili per 3 o 4', testArray4.filter(isDivisible3or4));
console.log('numeri divisibili per 3 o 4 (lambda function)',testArray4.filter((number)=> number % 3 === 0 || number % 4 === 0));
    

/// filtrare testArray5 in modo che rimangono solo le stringhe più corte di 6 lettere
function lessThan6(word){
     return word.length < 6;
}
console.log('parole più corte di sei', testArray5.filter(lessThan6));
console.log('parole più corte di sei (lambda function)', testArray5.filter((word) => word.length < 6))


/// filtrare testArray5 in modo che rimangono solo le stringhe che contengono la lettera 'n'
function contains_N(word){
    return word.includes('n');
}
console.log('contiene la lettera "n"', testArray5.filter(contains_N));
console.log('contiene la lettera "n" (lambda function)',testArray5.filter((word) => word.includes('n')));


/// filtrare testArray6 in modo che rimangano solo i numeri 
function is_number(something){
    return typeof(something) === 'number';
}
console.log('trova numeri', testArray6.filter(is_number));
console.log('trova numeri (lambda function)',testArray6.filter((value) => typeof(something) === 'number'));


/// mappare testArrays4 dividendo tutti i numeri per 3
function divide_by_3(number){
    return number / 3;
}
console.log('elementi array divisi per 3', testArray4.map(divide_by_3))
console.log('elementi array divisi per 3 (lambda function)', testArray4.map((number) => number / 3))


/// mappare testArray4 facendo la radice quadrata di tutti i numeri
function sqrt_value(number){
    return Math.sqrt(number);
}
console.log("radice quadrata dei valori dell'array", testArray4.map(sqrt_value));
console.log("radice quadrata dei valori dell'array (lambda function)", testArray4.map((number) => Math.sqrt(number)));


/// mappare testArray4 sommando uno solo ai numeri dispari  
function add_1_to_odd(number){
    return number + (number % 2)**2;
}
console.log('testArray4 normale', testArray4)
console.log('aggiungo  1 ai numeri dispari', testArray4.map(add_1_to_odd));
console.log('aggiungo  1 ai numeri dispari (lambda function)', testArray4.map((e) => e + (e % 2) ** 2));
//operatore ternario = condizione ? condizione = true : condizione = false
console.log('aggiungo  1 ai numeri dispari, operatore ternario', testArray4.map((e) => e % 2 ===0 ? e : e + 1));


/// mappare testArray5 rendendo maiuscole la prima e l'ultima lettera di ogni parola
function first_last_capital(word){
    return word[0].toUpperCase() + word.slice(1,word.length-1) + word[word.length-1].toUpperCase();
}
console.log('rendo maiuscola la prima e ultima lettera di ogni parola', testArray5.map(first_last_capital));
console.log('rendo maiuscola la prima e ultima lettera di ogni parola (lambda function)', testArray5.map((word) => word[0].toUpperCase() + word.slice(1,word.length-1) + word[word.length-1].toUpperCase()));


/// mappare testArray5 aggiungendo in fondo ad ogni stringa la lunghezza della stessa
function add_word_length(word){
    return word + " " + word.length;
}
console.log('aggiungo la lunghezza della parola alla fine ', testArray5.map(add_word_length));
console.log('aggiungo la lunghezza della parola alla fine (lambda function)', testArray5.map((word) => word + " " + word.length));


//filtrare tutti gli elementi di testArray che hanno indice pari
function even_index(element, index){
    return index % 2 === 0;
}
console.log('solo elementi con indice pari', testArray4.filter(even_index));
console.log('solo elementi con indice pari (lambda function)', testArray4.filter((e,i) => i % 2 === 0));

//mappare testArray4 in modo che ad ogni elemento venga sommato (se esiste) il successivo
function add_next_in_line(element, index, array){
    if(index < array.length-1){
        return element + array[index + 1];
    } else { 
        return element;
    }
}
 
console.log("sommo l'elemento al successivo", testArray4.map(add_next_in_line));
console.log("sommo l'elemento al successivo (lambda function)", testArray4.map((e,i,a) => i < a.length - 1 ? e + a[i + 1] : e ));

// reducing

function sum_all(array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}
console.log(sum_all(testArray4));

function multiply_all(array){
    let result = 1;
    for(let i = 0; i < array.length; i++){
        result *= array[i];
    }
    return result;
}
console.log('moltiplica tutti', multiply_all(testArray4));

function reducer_sum_all(previous, current){
    return previous + current;
}
console.log('somma tutti con reduce', testArray4.reduce(reducer_sum_all, 0)) //posso anche evitare di mettere 0, prenderà come prev [0] e current [1]
console.log('somma tutti lambda function', testArray4.reduce((p,c) => p + c))
console.log('moltiplica tutti lambda function', testArray4.reduce((p,c) => p*c))

function reduce_higher_than_2(previous, current){
    if(current > 2) previous.push(current);
    return previous
}
//Come usare il reduce come un filter
console.log('filtra maggiore di 2', testArray4.reduce(reduce_higher_than_2,[]))


function reduce_sum_even_index(previous, current, index){
    if(index % 2 === 0) return previous + current;
    else return previous;
}
console.log('sommare indici pari con reduce', testArray4.reduce(reduce_sum_even_index))

console.log('somma indice pare con reduce lambda function', testArray4.reduce((p,c,i) => i % 2 === 0 ? p + c : p ))












