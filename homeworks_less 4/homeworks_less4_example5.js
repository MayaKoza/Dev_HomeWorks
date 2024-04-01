// 5. Напишите код для управления светофором: (порядок цветов red => yellow => green => yellow => red => ....)
// Напишите функцию которая принимает текущий цвет и нужное количество итераций светофора и возвращает n последующих цветов светофора 
// Пример:
// trafficlightNextColors("green", 4)  //return "yellow red yellow green"
// trafficlightNextColors("yellow", 1)  //return "red"
// trafficlightNextColors("red", 5)  //return "yellow green yellow red yellow"

const trafficLights = ['green','yellow','red']
let resultArray = []
func .... {
    const colors = ["red", "yellow", "green"];
        let currentIndex = colors.indexOf(currentColor);
        if (currentIndex === -1) {
            return "Invalid color";
        }
        let result = "";
        for (let i = 0; i < iterations; i++) {....} 
    return result
    }