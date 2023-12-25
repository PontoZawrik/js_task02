// 1. Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).
// //
// const age = Number(prompt("Введите свой возраст: "))
//
// if (age >= 0 && age <= 12) {
//     alert("Ребенок")
// }
// else if (age > 12 && age < 18) {
//     alert("Подросток")
// }
// else if (age >= 18 && age <= 60) {
//     alert("Взрослый")
// }
// else if (age > 60 && age <= 120) {
//     alert("Пенсионер")
// }
// else {
//     alert("Error")
// }


// 2. Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).
//
// const number = Number(prompt("Введите число (0 - 9): "))
//
// let result;
// switch(number) {
//     case 1: result = "!"; break;
//     case 2: result = "@"; break;
//     case 3: result = "#"; break;
//     case 4: result = "$"; break;
//     case 5: result = "%"; break;
//     case 6: result = "^"; break;
//     case 7: result = "&"; break;
//     case 8: result = "*"; break;
//     case 9: result = "("; break;
//     case 0: result = ")"; break;
//     default: result = "Error"
// }
// alert(result)


// 3. Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.
//
// let number = prompt('Введите трехзначное число: ')
// number = number.split('')
//
// let result;
// for (let i = 1; i < number.length; i++) {
//     if (number[i-1] === number[i]) {
//         result = 'Есть одинаковые цифры'
//         break
//     }
//     else 
//         result = 'Нет одинаковых цифр'
// }
// alert(result)


// 4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100.
//
// const year = Number(prompt('Введите год: '))
//
// let result;
// if (year % 400 === 0 || year % 4 === 0 & year % 100 != 0) {
//     result = 'Високосный год'
// }
// else {
//     result = 'Не високосный год'
// }
// alert(result)


// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
//
// const number = prompt('Введите число: ')
//
// console.log(number.split(''))
//
// const result = number === number.spli.reverse().join('') 
//     ? 'Палиндром' : 'Не палиндром';
//
// alert(result)


// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, 
// в какую валюту хочет перевести: EUR, UAH или AZN, и получает в ответ соответствующую сумму.
//
// const USD = Number(prompt('Введите сумму (USD): '))
// const temp = Number(prompt('1 - EUR;  2 - UAH;  3 - AZN'))
//
// const EUR = 0.99
// const UAH = 40.94
// const AZN = 1.85
//
// let result
// if (temp === 1) {
//     result = USD * EUR
// }
// else if (temp === 2) {
//     result = USD * UAH
// }
// else if (temp === 3) {
//     result = USD * AZN
// }
// else {
//     result = 'Error'
// }
//
// alert(result)


