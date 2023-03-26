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
export {
  add,
  divide,
  formatNumberToKorean,
  getDiscountedPrice,
  multiply,
  subtract
};
//# sourceMappingURL=index.js.map
