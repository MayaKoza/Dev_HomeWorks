// Тема массивы и функции
// 2.  Создать массив строк и написать функцию для объединения всех элементов массива в одну строку. 

let arrayString = ["Apple","Banana","Coconut","Peach"];
    
function arrayMerge(arrayF){
 let tmpStr="";
 for (let i=0; i < arrayF.length; i++){
 tmpStr=`${tmpStr}${arrayF[i]} `;
 }
 return (tmpStr);
}

console.log(arrayMerge(arrayString));

//Apple Banana Coconut Peach 
    