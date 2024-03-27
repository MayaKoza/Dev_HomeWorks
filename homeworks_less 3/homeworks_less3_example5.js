// Тема массивы и функции
// 5. Написать функцию, которая принимает два числа (min max) и возвращает случайное число в указанном диапазоне:

function maxInRange(min, max){ //локальные одноименные переменные
    return(Math.ceil((Math.random() * (max - min) + min)));
}
const min=1;
const max=101;
console.log( min + " и " + max + " = " + maxInRange(min, max));

// 1 и 101 = случайное число