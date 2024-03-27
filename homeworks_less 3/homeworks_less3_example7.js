// Тема массивы и функции
// 7*. Создать массив чисел и написать функцию для нахождения среднего арифметического всех элементов массива.

const arrayNumber = [1,2,3,4,5,6,7,8,9];
let Sum=0;
function arrayArifmetica(SumArray){
    for (let i=0; i<SumArray.length;i++){
        Sum=Sum + SumArray[i];
        }
        return(Sum / SumArray.length);
    }
    console.log(arrayArifmetica(arrayNumber));

    // 5
