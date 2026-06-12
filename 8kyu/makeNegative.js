// ❓DESCRIPTION:
// В этом простом задании вам дано число, которое нужно сделать отрицательным. Но, может быть, число уже отрицательное?

// Примеры
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Примечания
// Число может быть уже отрицательным, в этом случае ничего менять не нужно.
// Ноль (0) не проверяется на наличие определенного знака. Отрицательные нули не имеют математического смысла.

// 🐤TEST CASES:
// Test.assertEquals(makeNegative(42), -42);

// ✅SOLUTION:
function makeNegative(num) {
  return -Math.abs(num);
}

// 🧪 Running tests
console.log(makeNegative(42)); // Должно вывести -42
console.log(makeNegative(-5)); // Должно вывести -5

// 2 вариант решения:
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }
