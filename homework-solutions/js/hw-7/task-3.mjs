/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  if (number < 10) return number; 
  let digits = String(number).split('').map(Number);
  let sum = digits.reduce((acc, digit) => acc + digit, 0);
    return sum > 9 ? digitalRoot(sum) : sum;}
export { digitalRoot };
