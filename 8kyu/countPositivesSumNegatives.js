// Количество положительных результатов / сумма отрицательных результатов || Count of positives / sum of negatives
// ❓DESCRIPTION:
// Задан массив целых чисел.

// Верните массив, где первый элемент — количество положительных чисел, а второй — сумма отрицательных. 0 не является ни положительным, ни отрицательным числом.

// Если входные данные представляют собой пустой массив или значение null, верните пустой массив.

// Пример
// Для входных данных [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], вы должны вернуть [10, -65].

// 🐤TEST CASES:
//   it("Testing for fixed test 1", () => {
//     let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [10, -65];
//     assert.deepEqual(actual, expected);
//   })

//   it("Testing for fixed test 2", () => {
//     let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//     let actual = countPositivesSumNegatives(testData);
//     let expected = [8, -50];
//     assert.deepEqual(actual, expected);

// ✅SOLUTION:
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let positiveCount = 0;
  let negativeSum = 0;

  input.forEach((num) => {
    if (num > 0) positiveCount++;
    else if (num < 0) negativeSum += num;
  });

  return [positiveCount, negativeSum];
}

// 🧪 Running tests
// Тест 1:
let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log("Тест 1:", countPositivesSumNegatives(testArray));
// Ожидаемый вывод: [10, -65]

// Тест 2: Пустой массив
console.log("Тест 2 (пустой):", countPositivesSumNegatives([]));
// Ожидаемый вывод: []

// Тест 3: Null
console.log("Тест 3 (null):", countPositivesSumNegatives(null));
// Ожидаемый вывод: []

// Тест 4: Только положительные
console.log("Тест 4:", countPositivesSumNegatives([1, 2, 3]));
// Ожидаемый вывод: [3, 0]

// Тест 5: Только отрицательные
console.log("Тест 5:", countPositivesSumNegatives([-1, -2, -3]));
// Ожидаемый вывод: [0, -6]

// Тест 6: С нулями (они не считаются ни туда, ни сюда)
console.log("Тест 6:", countPositivesSumNegatives([0, 0, 0]));
// Ожидаемый вывод: [0, 0]
