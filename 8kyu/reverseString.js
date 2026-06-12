// Reversed Strings - Перевернутые строки
//❓DESCRIPTION:
// Завершите решение так, чтобы оно перевернуло переданную в него строку.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// 🐤TEST CASES:
//    assert.strictEqual(solution('world'), 'dlrow');
//     assert.strictEqual(solution('hello'), 'olleh');
//     assert.strictEqual(solution(''), '');
//     assert.strictEqual(solution('h'), 'h');

// ✅SOLUTION:
function solution(str) {
  return str.split("").reverse().join("");
}

// 🧪 Running tests
console.log(solution("world")); //  'dlrow'
console.log(solution("hello")); //  'olleh'
console.log(solution("")); //  ''
console.log(solution("h")); //  'h'

// Более короткий вариант решения:
// function solution(str) {
//   return str.split('').reverse().join('');
// }
