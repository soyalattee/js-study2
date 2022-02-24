"use strict";
import { question, questionInt } from "readline-sync";

const str = "abcdefghijk";
console.log(`slice: ${str.slice(3, 1)}, substring: ${str.substring(3, 1)}`);

// let total = 0;
// for (let i = 5; i > 0; i--) {
//   let c = question("숫자를 입력하세요\n");
//   let a = question("숫자를 더할건가요?\n");
//   if (a == "yes") {
//     total = total + Number(c);
//     console.log(total);
//   }
// }
// console.log("total:", total);
// //38
// let name = question("이름을 입력하세요\n");
// let c = questionInt("숫자를 입력하세요\n");
// for (c; c > 0; c--) {
//   let i = name.length;
//   for (i; i > 0; i--) {
//     console.log(name.charAt(name.length - i));
//   }
//   if (c == 10) break;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach((value, index, arrs) => {
//   console.log(`${value} , ${arrs}`);
// });
// let name = question("이름을 입력하세요\n");
// let c2 = questionInt("숫자를 입력하세요\n");
// while (n > 0) {
//   const answer = question("끝낼까요? 끝내고싶으면 yes를 입력하세요");

//   if (answer === "yes") {
//     break;
//   }
// }
console.log(Math.floor(Math.random() * 10));
