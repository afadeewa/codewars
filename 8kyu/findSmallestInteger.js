//Find the smallest integer in the array - Найдите наименьшее целое число в массиве
// ❓DESCRIPTION:
// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

// Например:

// при условии [34, 15, 88, 2] ваше решение вернет 2
// при условии [34, -345, -1, 100] ваше решение вернет -345
// Для этой задачи можно предположить, что переданный массив не будет пустым.

// 🐤TEST CASES:
// assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
// assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
// assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
// assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
// assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);

// ✅SOLUTION:
function findSmallestInt(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return Math.min(...arr);
}

// 🧪 Running tests
console.log(findSmallestInt([78, 56, 232, 12, 8])); //  8
console.log(findSmallestInt([78, 56, 232, 12, 18])); // 12
console.log(findSmallestInt([78, 56, 232, 412, 228])); //  56
console.log(findSmallestInt([78, 56, 232, 12, 0])); //  0
console.log(findSmallestInt([1, 56, 232, 12, 8])); //  1
