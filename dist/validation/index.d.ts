/**
 * 1차원 배열이 서로 같은 값들을 가지고 있는지 확인하는 함수
 * @param a: array<T>
 * @param b: array<T>
 * @returns:boolean 같은 값인지에 대한 여부
 */
declare function isEqualArray<T>(a: T[], b: T[]): boolean;
/**
 * array에 data 여부에 따라 추가하거나, 삭제하는 로직
 * @param array 원본 배열
 * @param data 추가할 값
 * @returns 추가 및 삭제된 결과
 */
declare function addOrDeleteArray<T>(array: T[], data: T): T[];
export { isEqualArray, addOrDeleteArray };
