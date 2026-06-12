// Grasshopper - Боевая функция терминальной игры || Grasshopper - Terminal game combat function
// ❓DESCRIPTION:
// Создайте боевую функцию, которая забирает текущее здоровье игрока и количество полученного урона,
// а также возвращает игроку новое здоровье. Здоровье не может быть хуже, чем 0.

// 🐤TEST CASES:
// Test.assertEquals(combat(100, 5), 95);
// Test.assertEquals(combat(92, 8), 84);
// Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");

// ✅SOLUTION:
function combat(health, damage) {
  let newHealth = health - damage; // Вводим новую переменную и считаем разницу без привязки к числу
  if (newHealth < 0) {
    // проверяем, ушло ли здоровье в минус?  сравниваем новую переменную
    return 0; // Если да, что вернем по условию?
  }
  return newHealth; // Если нет, верни посчитанное значение
}

// 🧪 Running tests
console.log(combat(100, 5));
console.log(combat(92, 8));

// 1 вариант
// function combat(health, damage) {
// 	return health < damage ? 0 : health - damage
// }

// 2 вариант (Надо было так, потому чтоэто самый профессиональный и элегантный способ :))
// function combat(health, damage) {
//   return Math.max(health - damage, 0);
// }
