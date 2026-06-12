// Array plus array - Массив плюс массив
//❓DESCRIPTION:
// Я новичок в программировании, и теперь я хочу получить сумму двух массивов... На самом деле это сумма всех их элементов. Буду признателен за вашу помощь.
// P.S. Каждый массив содержит только целые числа. Результат тоже будет числом.

// 🐤TEST CASES:
// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

// ✅SOLUTION:
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
}

// 🧪 Running tests
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //  21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); // -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); //  15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // 2100

// Более короткий вариант решения:
// function arrayPlusArray(arr1, arr2) {
//   return [...arr1, ...arr2].reduce((a, b) => a + b, 0);
// }
