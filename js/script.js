// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

let numeri = [
    2000,
    20,
    43,
    8000,
    57,
    46,
    17,
    28,
    89,
    110
];



function snack(array, numero1, numero2) {
    let pippo = array.filter((element, index) => {
        return index > numero1 && index < numero2;
    });
    return pippo
}

let forbice = snack(numeri, 0, 5);


console.log(forbice);