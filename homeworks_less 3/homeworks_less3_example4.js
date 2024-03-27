// Тема массивы и функции
// 4.  Написать функцию которая принимает строку и возвращает эту же строчку но где первая буква с большой буква 

let stringToReverse = 'world';
function resultReverse(string){
let resRev1 = string.split('').reverse().join('');
let resRev2 = resRev1.charAt(0).toUpperCase() + resRev1 .slice(1)
return resRev2;
}
console.log(resultReverse(stringToReverse))

// Dlrow