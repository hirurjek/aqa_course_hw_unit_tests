/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 5;

//console.log(n + Number(String(n) + String(n)) + Number(String(n) + String(n) + + String(n))); // n + nn + nnn
console.log(n + Number("" + (n) + (n)) + Number(String(n) + (n) + (n))); // n + nn + nnn
