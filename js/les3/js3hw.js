//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// let strings = ['a', 'b', 'c', 'd', 'e'];
// console.log(strings);
// let huynya = [1, 'b', 'blya', true, 619];
// console.log(huynya);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 100;
// arr[1] = 'asdfdsa';
// arr[2] = 'asdfdsa';
// arr[3] = 'asdfdsa';
// arr[4] = 'asdfdsa';
// arr[5] = 'asdfdsa';
// arr[6] = 'asdfdsa';
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`)
//     document.write(`hello mate`);
//     document.write(`</div>`)
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`)
//     document.write(`hello competader number ` + i);
//     document.write(`</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i<20){
//     document.write(`<h1>hello</h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20){
//     document.write(`<h1>hello ${i + 1}</h1>`)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [23, 43, 57, 8, 32, 76, 34, 67, 98, 32];
// for (let numbers of arr){
//     console.log(numbers);
// }

// or

// let i = 0;
// while ( i < arr.length){
//     let num = arr[i];
//     console.log(num);
//     i++;
// }

//or

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let streng = ['ewafsd', 'ewafsd', 'ewafsghd', 'ewacvfsd', 'ewadsfsd', 'ewafsdasd', 'ewafsd', 'ewafsd', 'ewafsd', 'ewafsd'];
// for (let string of streng) {
//     console.log(string);
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let mix = [45, 76, 98, 'dfghj', 'hgfds', true, false, false, true, true, '123456', false, 234];
// for (let i = 0; i < mix.length; i++) {
//     const mixItem = mix[i];
//     if (typeof mixItem === 'boolean'){
//         console.log(mixItem);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let mix = [45, 76, 98, 'dfghj', 'hgfds', true, false, false, true, true, '123456', false, 234];
// for (let i = 0; i < mix.length; i++) {
//     const mixItem = mix[i];
//     if (typeof mixItem === 'number'){
//         console.log(mixItem);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let mix = [45, 76, 98, 'dfghj', 'hgfds', true, false, false, true, true, '123456', false, 234];
// for (let i = 0; i < mix.length; i++) {
//     const mixItem = mix[i];
//     if (typeof mixItem === 'string'){
//         console.log(mixItem);
//     }
// }



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`${i}`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//    if (i % 2 === 0 && i !== 0) {
//        console.log(i);
//    }
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
   if (i % 2 === 1 ) {
       console.log(i);
   }
}