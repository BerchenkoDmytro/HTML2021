// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

let arraofNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < arraofNumbers.length){
//     console.log(arraofNumbers[i]);
//     i++;
// }

//     2. перебрати його циклом for

// for (let i = 0; i < arraofNumbers.length; i++) {
//     const arraofNumbersItem = arraofNumbers[i];
//     console.log(arraofNumbersItem);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < arraofNumbers.length) {
//     if (i % 2 === 1) {
//         console.log(arraofNumbers[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arraofNumbers.length; i++) {
//     const arraofNumbersItem = arraofNumbers[i];
//     if (arraofNumbersItem % 2 === 1) {
//         console.log(arraofNumbersItem);
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < arraofNumbers.length) {
//     if (i % 2 === 0) {
//         console.log(arraofNumbers[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < arraofNumbers.length; i++) {
//     const arraofNumbersItem = arraofNumbers[i];
//     if (arraofNumbersItem % 2 === 0) {
//         console.log(arraofNumbersItem);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

for (let item of arraofNumbers) {
    if (item % 3 === 0){
        item = 'okten';
        console.log(item);
    }

}

// 8. вивести масив в зворотньому порядку.
// for (let i = arraofNumbers.length - 1; i >= 0; i--) {
//     const arraofNumber = arraofNumbers[i];
//
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
