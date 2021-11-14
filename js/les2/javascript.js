// let xxx = confirm('are you older than 18?');
// console.log(xxx); // true or false

// let age = +prompt('enter you age');
// if (age >= 18) {
//     document.write(`<h1>adult video</h1>`);
// }
//
//     if (age < 18) {
//         document.write(`<h1>kids video</h1>`);
//     }
//abo
/*

let age = +prompt('enter you age');
if (age >= 18) {
    document.write(`<h1>adult video</h1>`);
} else if (age > 0 && age <= 10)  // vid 1 do 10
{
    document.write(`<h1>kids video</h1>`);
} else if (age > 10 && age < 18) // vid 11 do 17
{
    document.write(`<h1>anime video</h1>`);
}
*/


// let color = "red";
// or
// let color = prompt('enter color');
// if (color === 'red') {
//     console.log('stop');
// } else if (color === 'yellow') {
//     console.log('wait');
// } else if ( color === 'green' || confirm('road is clear?'))  // || abo
// {
//     console.log('go!');
// } else {
//     console.log('????')
// }


// let key = '';
// switch (key) {
//     case 'winter':
//         console.log('take warm');
//         break;
//     case 'summer':
//         console.log('go to lake');
//         break;
//
//     default:
//         console.log('sha')
// }
//
// let name = prompt('enter your name') || 'sweety';
//
// document.write(`<h2>hello ${name}</h2>`);

// let asd = '';
// let num = 100;
// if (num === 100) {
//     asd = 'hundred';
// } else {
//     asd = 'not hundred';
// }
// console.log(asd);

//or
let num = 100;
let asd = num === 100 ? 'hendred' : 'not hundred'; // ternarka
console.log(asd);

// ================================================ ТЕРНАРКА + prompt =========================================
// (+prompt('Введіть поточний рік') % 4 === 0) ? console.log('Рік ВИСОКОСНИЙ') : console.log('УРА! Наш рік нормальний');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let oficialName = prompt('Яка «офіційна» назва JavaScript?');
// if(oficialName === 'ECMAScript'){
//    alert('Правильно, гарна робота');
// } else{
//    alert('Неправильно, офіційна назва - ECMAScript!');
// }