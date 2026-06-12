// Get the mean of an array - Получить среднее значение массива
//❓DESCRIPTION:
// Это конец учебного года, судьбоносный момент вашего школьного отчета. Нужно подсчитать средние баллы.
//  Все ученики приходят к вам и просят подсчитать их средний балл. Легко! Вам просто нужно написать скрипт.
// Возвращает среднее значение заданного массива, округленное в меньшую сторону до ближайшего целого числа.
// Массив никогда не будет пустым.

// 🐤TEST CASES:
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

// ✅SOLUTION:
function getAverage(marks) {
  const sum = marks.reduce((acc, mark) => acc + mark, 0);
  return Math.floor(sum / marks.length);
}

// 🧪 Running tests
console.log(getAverage([2, 2, 2, 2])); //  2
console.log(getAverage([1, 2, 3, 4, 5])); //  3

// Более короткий вариант решения:
// function getAverage(marks) {
//   return Math.floor(marks.reduce((acc, mark) => acc + mark, 0) / marks.length);
// }
