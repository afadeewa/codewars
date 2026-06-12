// Grasshopper - Terminal game move function || Grasshopper - Функция перемещения в терминальной игре

// ❓DESCRIPTION:
// Функция перемещения в терминальной игре
// В этой игре герой перемещается слева направо. Игрок бросает кубик и перемещается на указанное количество клеток два раза.

// Создайте функцию для игры в терминале, которая принимает текущее положение героя и результат броска (от 1 до 6) и возвращает новое положение.

// Пример:
// move(3, 6) should equal 15

// 🐤TEST CASES:
// Test.assertEquals(move(0, 4), 8);
// Test.assertEquals(move(3, 6), 15);
// Test.assertEquals(move(2, 5), 12);

// ✅SOLUTION:
function move(position, roll) {
  return position + roll * 2;
}

// 🧪 Running tests
console.log(move(0, 4));
console.log(move(3, 6));
