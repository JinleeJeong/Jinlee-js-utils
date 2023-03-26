// src/math/index.ts
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function formatNumberToKorean(value) {
  return new Intl.NumberFormat("ko-KR").format(value);
}
function getDiscountedPrice(value, rate) {
  return value - value * (rate / 100);
}

// src/validation/index.ts
function isEqualArray(a, b) {
  return a.length === b.length && a.every((item) => b.includes(item)) && b.every((item) => a.includes(item));
}
function addOrDeleteArray(array, data) {
  if (array.some((value) => value === data)) {
    return array.filter((value) => value !== data);
  } else {
    return [...array, data];
  }
}
export {
  add,
  addOrDeleteArray,
  divide,
  formatNumberToKorean,
  getDiscountedPrice,
  isEqualArray,
  multiply,
  subtract
};
//# sourceMappingURL=index.js.map
