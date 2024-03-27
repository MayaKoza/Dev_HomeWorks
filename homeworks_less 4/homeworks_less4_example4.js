// 4.Создайте функцию с двумя аргументами (step, maxValue) которая будет возвращать массив от 0 до (maxValue * step) с шагом step
// пример:
// countBy(3, 10) //return [3,6,9,12,15,18, 21, 24,27,30]
// countBy(2,5) //return [2,4,6,8,10]
// countBy(4, 11) // return  [4,8]

let valueMaxArray = []
function valueMax(step,maxValue){
    let maximum = maxValue*step
    for(let y=0;y<=maximum;y+=step){
        valueMaxArray.push(y)
        
    }
    console.log(valueMaxArray)
}

valueMax(3,10)


