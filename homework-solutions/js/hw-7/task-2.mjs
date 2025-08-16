/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  if (word === '') return true; // пустая строка считается палиндромом
  
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || !sentence.trim()) return [];

  let words = sentence.trim().split(/\s+/);
  let maxLen = Math.max(...words.map(w => w.length));

  return words
    .filter(w => w.length === maxLen);
}

export { isPalindrom, findLongestWords };
