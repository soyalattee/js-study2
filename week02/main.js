import { question } from "readline-sync";
// 문제 4
// const num1 = Number(question());
// const num2 = Number(question());
// console.log(`The total is ${num1 + num2}`);
// 문제 5
// const num1 = Number(question("첫번째 값:"));
// const num2 = Number(question("두번째 값:"));
// const num3 = Number(question("세번째 값:"));
// const result = (num1 + num2) * num3;
// console.log(`The answer is ${result}`);

//문제 6
// const num1 = Number(question("처음 피자 조각 수 :"));
// const num2 = Number(question("먹은 피자 조각 수:"));

// console.log(`남은 피자 조각수는 ${num1 - num2}개 입니다.`);

//문제 7
// const name = question("이름을 입력하세요. ");
// const age = Number(question("나이를 입력하세요.."));
// const newAge = age + 1;
// console.log(`${name} next birtday you will be ${newAge}`);

//문제 8
// const totalPrice = Number(question("총 금액 :"));
// const totalPeople = Number(question("몇명이 식사 했나요?"));
// const price = Math.round(totalPrice / totalPeople);
// console.log(`각 ${price}원 씩 계산합니다.`);

//문제 10
// const kg = Number(question("몇 kg 입니까?"));
// const pound = kg * 2.204;
// console.log(`${kg}kg은 ${pound} 입니다.`);

//문제 11
const bigNumber = Number(question("100이상 수를 입력하세요."));
const smallNumber = Number(question("10이하 수를 입력하세요."));
console.log(
  "%d 안에 %d가 약 %d번 들어갑니다.",
  bigNumber,
  smallNumber,
  Math.round(bigNumber / smallNumber)
);
