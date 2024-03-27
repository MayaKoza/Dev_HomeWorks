// Задания со звездочкой на умение гуглить и искать материалы самостоятельно:
// 1. Сделать все через одну переменную (использовать object) 
// 2. Указывать текущий год не числом, а используя тип Date и его методы
// Так же важно ПРАВИЛЬНО именовать переменные!! (Имя:  name = 'Николай' а не pkasd = 'Николай)

let myInfo = {
    firstName:  'Майя',
    lastName: 'Борисевич',
    middleName: 'Константиновна',
    yearOfBearth: '1996',
    currentYear: new Date().getFullYear(),
    age: 0,
    studying: true,
    working: false,
    };
    myInfo.age = Number(myInfo.currentYear) - parseInt(myInfo.yearOfBearth);
    
    console.table(myInfo);
    