// ❓DESCRIPTION:
// Дополните метод, который принимает логическое значение и возвращает строку "Yes" для true, или строку "No" для false.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// 🐤TEST CASES:
//     assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')

// ✅SOLUTION:
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  }
  return "No";
}

// 🧪 Running tests
console.log(boolToWord(true)); // Должно вывести "Yes"
console.log(boolToWord(false)); // Должно вывести "No"

// Более короткий вариант решения:
// function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }
