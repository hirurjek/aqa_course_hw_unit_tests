// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch


function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}
delayTwoSeconds(() => console.log('2 seconds have passed'));

const promise = new Promise((resolve, reject) => {
    resolve(1);
});
promise.then(result => console.log(result));

const promise2 = new Promise((resolve, reject) => {
    reject('Promise failed');
});
promise2.catch(error => console.log(error));

function promiseNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject(new Error("Argument must be a number"));
    } else {
      resolve(num);
    }
  });
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then(
  (results) => {
    results.forEach((result) => {
      console.log(result);
    });
  }
);


Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(results => {
        results.forEach(result => {
            console.log(`Status: ${result.status}, Value: ${result.value}`);
        });
    });
    
async function handlePromiseAll() {
    try {
        const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach(result => console.log(result));
    } catch (error) {
        console.error('Error:', error);
    }
}
handlePromiseAll();

async function handlePromiseAllSettled() {
    try {
        const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        results.forEach(result => {
            console.log(`Status: ${result.status}, Value: ${result.value}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}
handlePromiseAllSettled();
