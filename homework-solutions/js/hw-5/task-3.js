/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowels = word.match(/[aeiou]/gi) || 0;
let consonants = word.match(/[^aeiou\s]/gi) || 0;

let vowelsAndConsonantsResult = '';

vowelsAndConsonantsResult = `${word} contains ${vowels.length} vowels and ${consonants.length} consonants`;

export { vowelsAndConsonantsResult };
