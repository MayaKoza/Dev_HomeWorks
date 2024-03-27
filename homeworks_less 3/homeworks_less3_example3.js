// Тема массивы и функции
// 3. Написать функцию, которая принимает строку и возвращает эту же строку в обратном порядке.

let strReverse = 'World';
function reverse(string){
let resReverse = string.split('').reverse().join('');
return (resReverse);
}
console.log(reverse(strReverse))

//dlroW