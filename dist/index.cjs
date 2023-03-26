"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  add: () => add,
  addOrDeleteArray: () => addOrDeleteArray,
  divide: () => divide,
  formatNumberToKorean: () => formatNumberToKorean,
  getDiscountedPrice: () => getDiscountedPrice,
  isEqualArray: () => isEqualArray,
  multiply: () => multiply,
  subtract: () => subtract
});
module.exports = __toCommonJS(src_exports);

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
//# sourceMappingURL=index.cjs.map
