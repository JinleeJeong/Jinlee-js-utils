function add(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}
function multiply(a: number, b: number) {
  return a * b;
}
function divide(a: number, b: number) {
  return a / b;
}

/**
 * 주어진 숫자를 한국 숫자 서식에 알맞은 문자열로 바꾸어 반환
 * @param value 변환할 숫자
 */
function formatNumberToKorean(value: number): string {
  return new Intl.NumberFormat("ko-KR").format(value);
}

/**
 * 할인 금액을 구하는 유틸 함수
 * @param value 원가
 * @param rate 할인율
 * @returns 할인된 금액
 */
function getDiscountedPrice(value: number, rate: number): number {
  return value - value * (rate / 100);
}

export {
  add,
  subtract,
  multiply,
  divide,
  formatNumberToKorean,
  getDiscountedPrice,
};
