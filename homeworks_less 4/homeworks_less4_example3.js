// 3. Вы получаете массив чисел, верните сумму всех положительных чисел. Если суммировать нечего, то return 0
// Пример: [1,-4,7,12] => return "1+7+12=20"

let arrayOne = [1,-5,12,-34]
let arraySum = 0
function sumArray(array){
    for(let i=0;i<array.length;i++){
        arraySum = arraySum + Math.abs(array[i])
        
}
console.log(arraySum)
}
sumArray(arrayOne)
