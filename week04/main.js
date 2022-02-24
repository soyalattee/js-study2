"use strict";
import { question } from "readline-sync";

//Symbol

//1. 이름만 쓰이는 상수 생성(Enum)
const Direction = Object.freeze({
  Up: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
});

const keyValue = Symbol("key");

const user = {
  name: "soyeon",
  direction: Direction.Up.description,
  weapon: "soard",
};

//2. 프로퍼티 은닉
// const user = {
//   name: "soyeon",
//   weapon: "soard",
//   [Symbol("key")]: 1324241,
// };

//피그 라틴(Pig Latin)은 단어의 첫 자음을 가져와서 단어 끝으로 이동하고 마지막에 'ay'를 추가한다.
// 만약 단어가 모음으로 시작 한다면 단어의 끝에 그냥 'way'를 붙인다. 예를 들어, 'pig'라는 단어는 'igpay', 'banana'는 'ananabay', 그리고 'aadvark'는 'aadvarkway'가 된다.
// 사용자에게 단어를 입력받아서 피그 라틴으로 변환하고 소문자로 출력하는 프로그램을 만들어라.
const name1 = question("Pig Latin 입력: ");

if (isJaum(name1)) {
  //시작이 자음인 경우
  const newName1 = name1.slice(1);
  const fisrtLetter = name1.charAt(0);
  const result = newName1 + fisrtLetter + "ay";
  console.log(result.toLowerCase());
} else {
  //시작이 모음인 경우
  console.log(`${name1}way`);
}

switch (
  score // 100 :성공 , 101 : 유저가 뭘 안했어, 200 : 없는데이터야~~, 201 ....
) {
  case score > 100:
    popup("축하해~~");
    break;
  case score > 90:
    popup("아쉽네");
    break;
  default:
    popup("수고했어");
    break;
}
function isJaum(name) {
  const result =
    name.charAt(0).toUpperCase() != "A" &&
    name.charAt(0).toUpperCase() != "E" &&
    name.charAt(0).toUpperCase() != "I" &&
    name.charAt(0).toUpperCase() != "O" &&
    name.charAt(0).toUpperCase() != "U";
  return result;
}


function speak(talk) {
  console.log(talk);
}

speak("내용내용 ");

for (let i = 0; i++; i < 10) {
  console.log(i);
}
