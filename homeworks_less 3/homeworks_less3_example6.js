// Тема массивы и функции
// 6*. Создать массив чисел и написать функцию для вывода суммы всех элементов массива.

const arrayNumber = [1,2,3,4,5,6,7,8,9];
let Sum=0;
function arrSum(SumArray){
    for (let i=0; i<SumArray.length;i++){
    Sum=Sum + SumArray[i];
    }
    return(Sum);
}
console.log(arrSum(arrayNumber));

// 45

