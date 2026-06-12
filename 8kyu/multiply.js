// ❓DESCRIPTION:
// Этот код выполняется некорректно. Попробуйте разобраться, в чем дело.

// 🐤TEST CASES:
//     assert.strictEqual(multiply(1,1), 1);
//     assert.strictEqual(multiply(2,1), 2);
//     assert.strictEqual(multiply(2,2), 4);
//     assert.strictEqual(multiply(3,5), 15);
//     assert.strictEqual(multiply(5,0), 0);
//     assert.strictEqual(multiply(0,5), 0);
//     assert.strictEqual(multiply(0,0), 0);

// ✅SOLUTION:
function multiply(a, b) {
  return a * b;
}

// 🧪 Running tests
console.log(multiply(1, 1)); // Ожидается: 1
console.log(multiply(2, 1)); // Ожидается: 2
console.log(multiply(2, 2)); // Ожидается: 4
console.log(multiply(3, 5)); // Ожидается: 15
console.log(multiply(5, 0)); // Ожидается: 0
console.log(multiply(0, 5)); // Ожидается: 0
console.log(multiply(0, 0)); // Ожидается: 0
