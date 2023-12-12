'use strict'
// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const numberFirst = +prompt("Введите первое число");
const numberSecond = +prompt("Введите второе число");
function cub(num) {
    return Math.pow(num, 3);
}
console.log(`Результат сложения двух кубов равен ${(cub(numberFirst) + cub(numberSecond))}`);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const userNumber = prompt("Введите ваше число:");
console.log(typeof (userNumber));
function tax(salary) {
    if (isFinite(salary)) {
        console.log(`Размер заработной платы за вычетом налогов равен ${userNumber * 0.87}`);
    }
    else {
        console.log("Введите корректное число!");
    }
}

tax(userNumber);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const numbersFirst = +prompt("Введите первое число");
const numbersSecond = +prompt("Введите второе число");
const numbersThird = +prompt("Введите третье число");

function max(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1);
        }
        else {
            console.log(num3);
        }
    }
    else {
        if (num2 > num3) {
            console.log(num2);
        }
        else {
            console.log(num3);
        }
    }
}
max(numbersFirst, numbersSecond, numbersThird);


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const numFirst = +prompt("Введите 1-е число:");
const numSecond = +prompt("Введите 2-е число:");

function sum(x, y) {
    return x + y;
}

function diff(x, y) {
    if (x <= y) {
        return y - x;
    } else {
        return x - y;
    }
}

function div(x, y) {
    return x / y;
}

function multi(x, y) {
    return x * y;
}

console.log(sum(numFirst, numSecond));
console.log(diff(numFirst, numSecond));
console.log(div(numFirst, numSecond));
console.log(multi(numFirst, numSecond));