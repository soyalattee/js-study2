"use strict";
import { question } from "readline-sync";

//12
// 두 개의 숫자를 입력받는다.
// 만약 첫 번째 숫자가 두 번째 숫자보다 크면, 두 번째 숫자를 출력하라.
// 그렇지 않다면 첫 번째 숫자를 출력한 다음에 두 번째 숫자를 출력하라.

// const num1 = Number(question("first : "));
// const num2 = Number(question("second : "));
// if (num1 > num2) {
//   console.log(num2);
// } else {
//   console.log(`${num1} ${num2}`);
// }

//13
// 사용자에게 20보다 작은 숫자를 입력하라고 요청한다.
// 만약 입력된 값이 20과 같거나 크면 "Too high"라는 메시지를 출력하라.
// 그렇지 않다면 "Thank you"를 출력하라.
// const num = Number(question("20보다 작은 숫자를 입력하세요 :"));

// if (num >= 20) {
//   console.log("Too high");
// } else {
//   console.log("Thank you");
// }

// const age = Number(question("나이가 몇 살입니까?"));

// if (age >= 18) {
//   console.log("You can vote");
// } else if (age == 17) {
//   console.log("You can learn to drive");
// } else if (age == 16) {
//   console.log("you can buy a lottery ticke");
// } else {
//   console.log("You can go Trick-or-Treating");
// }

// switch (true) {
//   case age >= 18:
//     console.log("You can vote");
//     break;
//   case age == 17:
//     console.log("You can learn to drive");
//     break;
//   case age == 16:
//     console.log("you can buy a lottery ticket");
//     break;
//   default:
//     console.log("You can go Trick-or-Treating");
//     break;
// }

const num = 1.1818181818;
const cutnumber = question("몇째로 자를까요");
//셋째자리 컷 내림 1.1
const chageNum = fixedLow(num, cutnumber);

function fixedLow(number, count) { 100, 1000, 10000
  const result = Math.floor(number * Math.pow(10, count)) / Math.pow(10, count);
  return result;
}
console.log(chageNum);
