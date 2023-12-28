// 1. Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).
//
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
// const result = number === number.split('').reverse().join('') 
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


// 7. Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%. 
//
// let number = Number(prompt('Введите сумму: '))
//
// if (number >= 0) {
//     if (number >= 200 && number < 300) {
//         number = number * 0.97
//     }
//     else if (number >= 300 && number < 500) {
//         number = number * 0.95
//     }
//     else if (number >= 500) {
//         number = number * 0.93
//     }
// }
// else {
//     alert('Error')
// }
//
// alert(number)


// 8. Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат. 
//
// const C_circle = Number(prompt(''))
// const P_square = Number(prompt(''))
//
// let result
// if (C_circle > 0 || P_square > 0) {
//     if (C_circle / 3.14 < P_square / 4) {
//        result = 'Окружность может поместиться'
//     }
//     else {
//        result = 'Окружность не может поместиться'
//     }
// }
// else {
//     alert('Error')
// }
//
// alert(result)


// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
// За каждый правильный ответ начисляется 2балла. После вопросов выведите 
// пользователю количествонабранных баллов.
//
// alert('Правильный ответ: 1')
// const answer1 = Number(prompt('1 - правильный;  2 - не правильный;  3 - не правильный;'))
// alert('Правильный ответ: 3')
// const answer2 = Number(prompt('1 - не правильный;  2 - не правильный;  3 - правильный;'))
// alert('Правильный ответ: 2')
// const answer3 = Number(prompt('1 - не правильный;  2 - правильный;  3 - не правильный;'))
//
// let result = 0
// result += answer1 === 1 ? 2 : 0
// result += answer2 === 3 ? 2 : 0
// result += answer3 === 2 ? 2 : 0
//
// alert(`Вы набрали ${result} баллов`)


// 10. Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год. 
//
// let number = prompt('Введите дату (день месяц год): ').split(' ')
//
// let day = Number(number[0])
// let month = Number(number[1])
// let year = Number(number[2])
//
// if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
//     let leap_year = false
//     if (year % 400 === 0 || year % 4 === 0 & year % 100 != 0) {
//         leap_year = true
//     }
//    
//     if (day === 28 && month === 2 && !leap_year) {
//         day = 1
//         month++
//     }
//     else if (day === 29 && month === 2 && leap_year) {
//         day = 1
//         month++
//     }
//     else if ((day > 28 && !leap_year) || (day > 29 && leap_year) && month === 2) {
//         alert('Error')
//     }
//     else {
//         if (day === 30) {
//             switch (month) {
//                 case 4: day = 1; month++; break
//                 case 6: day = 1; month++; break
//                 case 9: day = 1; month++; break
//                 case 11: day = 1; month++; break
//                 default: day++
//             }
//         }
//         else {
//             if (day === 31 && month === 12) {
//                 day = 1
//                 month = 1
//                 year++
//             }
//             else if (day === 31) {
//                 day = 1
//                 month++
//             }
//             else {
//                 day++
//             }
//         }
//     }
// }
// else {
//     alert('Error')
// }
//
// day = day < 10 ? `0${day}` : day
// month = month < 10 ? `0${month}` : month
//
// alert(`${day}/${month}/${year}`)