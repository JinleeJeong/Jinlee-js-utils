declare function add(a: number, b: number): number;
declare function subtract(a: number, b: number): number;
declare function multiply(a: number, b: number): number;
declare function divide(a: number, b: number): number;
/**
 * 주어진 숫자를 한국 숫자 서식에 알맞은 문자열로 바꾸어 반환
 * @param value 변환할 숫자
 */
declare function formatNumberToKorean(value: number): string;
/**
 * 할인 금액을 구하는 유틸 함수
 * @param value 원가
 * @param rate 할인율
 * @returns 할인된 금액
 */
declare function getDiscountedPrice(value: number, rate: number): number;
export { add, subtract, multiply, divide, formatNumberToKorean, getDiscountedPrice, };
