// 1. Вам дано любое число и вы должны сделать его отрицательным, если оно уже не отрицательное или не 0
// Примеры
// makeNegative (1); // return -1
// makeNegative (-5); // return -5
// makeNegative (0); // return O
// makeNegative (0.12); // return -0.12

// Примечания
// • Число уже может быть отрицательным, и в этом случае никаких изменений не требуется.
// • Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательный ноль не имеет математического смысла.

makeNegative (1); // return -1
makeNegative (-5); // return -5
makeNegative (0); // return O
makeNegative (0.12); // return -0.12

function makeNegative(num) {
    console.log( Math.abs(num) * -1);
};
makeNegative(10)