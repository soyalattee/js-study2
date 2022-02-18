"use strict";
import { question } from "readline-sync";

const name = question("이름 입력: ");
const count = question("반복 횟수 :");
for (let j = 0; j < count; j++) {
  console.log(`부모 for문이야. ${j} 번째 반복중`);
  for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
  }
}
