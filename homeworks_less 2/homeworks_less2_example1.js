// 1. Создать переменные типа string: (Важно string)
// "имя" "фамилия" "отчество" "год рождения" "текущий год"
// 3. Создать переменную age типа number и присвоить ей значение 0
// 4.Создать переменные типа boolean : 
// "учусь" "работаю"
// 5.изменить значение переменной agе на корректный возраст который нужно вычислить используя переменные "год рождения" "текущий год"
// 6. Вывести через console.table таблицу с этими переменными (пример на скриншоте)

const firstName = 'Майя'
const lastName = 'Борисевич'
const middleName = 'Константиновна'
const yearOfBearth = '1996'
const currentYear = '2024'
let age = 0
age = parseInt(currentYear) - parseInt(yearOfBearth)
const studying = true
const working = false

console.table({
    firstName: {Values:firstName},
    lastName: {Values:lastName},
    middleName: {Values:middleName},
    yearOfBearth: {Values:yearOfBearth},
    currentYear: {Values:currentYear},
    age: {Values:age},
    studying: {Values:studying},
    working:{Values:working}
})