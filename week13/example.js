"use strict";
import { questionInt } from "readline-sync";
import { question } from "readline-sync";
// 13주차 ?
// 문제93) 사용자에게 숫자 다섯 개를 입력하라고 요청한다.
// 입력된 숫자를 정렬하고 사용자에게 표시한다.
// 배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 입력된 숫자를 배열에서 삭제하고 새로운 배열에 그 값을 저장하라

const array = [];

for (let i = 0; i < 5; i++) {
  array.push(questionInt("숫자 입력: "));
}
console.log(array);

const num = questionInt("배열중 숫자 입력: ");
const index = array.indexOf(num);

if (num > -1) {
  array.splice(index, 1);
}
console.log(array);
