// console.log('hello world');

// //переменные
// var books = 'Мастер и маргарита';
// console.log(books)

// var nameAndSurname = 'Omka';

// //типы даных
// var text = 'frontend' //string
// var num = '45'
// console.log(typeof text);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.repeat(4));

// var number = 90 //number
// console.log(typeof number);
// console.log('средний возраст группы 28-03 ->',);


// let name;
// console.log(name);

// var money = null;
// console.log(typeof money);

// var isMarried = false; //boolean
// console.log(isMarried);

// //операторы
// //условные
// //сравнения
// var num1 = 90
// var num2 = 90
// console.log(num1 ==== num2);

//условные конструкции if, else if, else, switch..case
//логические
// var password = 12345
// var login = 'qwerty'

// var login2 = prompt('введите логин')
// var password2 = prompt

// var word1 = prompt('введите любое слово')
// var word2 = prompt('введите любое слово')
// if(word1.length > word2.length){
//     console.log('слово ',word1, 'длиннее чем слово', word2);
// }else if(word1.length < word2.length){
//     console.log('слово', word2,'длиннее чем слово', word1);
// }else if(word1.length ==== word2.length){
//     console.log('они равны');
// }else{
//     console.log('error')
// };


var date = prompt('день рождение')
var month = Number( prompt('месяц'))
if((date >= 22 && month === 11) || (date <= 20 && month === 0))
    alert('Козерог')
if((date >= 21 && month === 0) || (date <= 18 && month === 1))
    alert('Водолей');

if((date >= 19 && month === 1) || (date <= 20 && month === 2))
    alert('Рыбы');

if((date >= 21 && month === 2) || (date <= 19 && month === 3))
    alert('Овен');

if((date >= 20 && month === 3) || (date <= 20 && month === 4))
    alert('Телец');

if((date >= 21 && month === 4) || (date <= 21 && month === 5))
    alert('Близнецы');

if((date >= 22 && month === 5) || (date <= 22 && month === 6))
    alert('Рак');

if((date >= 23 && month === 6) || (date <= 22 && month === 7))
    alert('Лев');

if((date >= 23 && month === 7) || (date <= 22 && month === 8))
    alert('Дева');

if((date >= 23 && month === 8) || (date <= 23 && month === 9))
    alert('Весы');

if((date >= 24 && month === 9) || (date <= 22 && month === 10))
    alert('Скорпион');

if((date >= 23 && month === 10) || (date <= 21 && month === 11))
    alert('Стрелец');