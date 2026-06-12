//Sum Mixed Array - Сумма Смешанного массива
// ❓DESCRIPTION:
// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Верните свой ответ в виде числа.

// 🐤TEST CASES:
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// ✅SOLUTION:
function sumMix(x) {
  return x.reduce((sum, value) => sum + Number(value), 0);
}

// 🧪 Running tests
console.log(sumMix([9, 3, "7", "3"])); // Ожидается: 22
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // Ожидается: 42
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // Ожидается: 41
