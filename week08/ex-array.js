"use strict";
import { question, questionInt } from "readline-sync";

//69

// const arr = ['KOREA', 'UK', 'FRANCE', 'JAPAN', 'CHINA'];

// console.log(arr);
// const country = question('국가 입력: ');

// arr.find((el, idx) => {
//   if (el === country.toLocaleUpperCase())
//     console.log('해당 국가 index : ', idx);
// });

//70

// const userIndex = questionInt('인덱스를 입력하세요: ');

// const selectedCountry =
//   userIndex < arr.length ? arr[userIndex] : '해당 인덱스는 비었습니다.';
// console.log(selectedCountry);

//71
// const sports = ['축구', '농구'];
// const newSport = question('좋아하는 스포츠가 무엇인가요? ');
// sports.push(newSport);
// console.log(sports);

//72
// const subjects = [
//   'math',
//   'english',
//   'science',
//   'chinese',
//   'history',
//   'computer science',
// ];
// console.log(subjects);
// const deleteSubject = question('좋아하지 않는 과목은 무엇인가요?');
// const idx = subjects.indexOf(deleteSubject);
// if (idx > -1) {
//   subjects.splice(idx, 1);
// }

// console.log(subjects);

//73
// const foods = ['null'];

// for (let i = 0; i < 4; i++) {
//   const food = question('좋아하는 음식을 입력하세요.');
//   foods.push(food);
// }

// const getList = function (arr) {
//   console.log('[Food List]');
//   arr.forEach((val, idx) => {
//     if (idx == 0) {
//       return;
//     }
//     console.log(`${idx} : ${val} `);
//   });
// };
// getList(foods);
// const deleteFood = question('지우고 싶은 항목을 입력하세요.');
// const deleteIdx = foods.indexOf(deleteFood);
// foods.splice(deleteIdx, 1);
// getList(foods);

//74
// const colors = [
//   'red',
//   'greed',
//   'blue',
//   'yellow',
//   'pink',
//   'black',
//   'white',
//   'skyblue',
//   'orange',
//   'gray',
// ];
// console.log(colors);
// const startIdx = questionInt('시작인덱스 0~4 사이 입력하세요 : ');
// const endIdx = questionInt('끝인덱스 5~9 사이 입력하세요 : ');
// const newArr = colors.slice(startIdx, endIdx + 1);
// console.log(newArr);

//75
// const numbers = [415, 491, 987];
// numbers.forEach((el) => console.log(el));
// const userNum = questionInt('숫자를 입력하세요.');
// const index = numbers.indexOf(userNum);
// if (index === -1) {
//   console.log('That is not in the list');
// }

//76
// const guests = [];
// for (let i = 0; i < 3; i++) {
//   const newGuest = question(`초대할 사람 이름을 입력하세요 (${3 - i})`);
//   guests.push(newGuest);
// }
// while (true) {
//   const addMoreGuest = question('게스트를 더 추가 하시겠습니까? (y/n)');
//   if (addMoreGuest === 'n') {
//     break;
//   }
//   const newGuest = question(`초대할 사람 이름을 입력하세요`);
//   guests.push(newGuest);
// }
// console.log(`${guests.length}명이 초대 되었습니다.`);
//77
// console.log(guests);
// const deleteGuest = question('명단의 사람중 한명의 이름을 입력하세요.');
// const deleteIndex = guests.indexOf(deleteGuest);

// if (deleteIndex >= 0) {
//   const checkDelete = question(
//     `${deleteIndex}번 손님을 정말 초대하시겠습니까?(y/n)`
//   );
//   if (checkDelete === 'n') {
//     guests.splice(deleteIndex, 1);
//   }
// } else {
//   console.log('없는 사람입니다.');
// }
// console.log(guests);

//78
// const programs = ['나혼산', '내셔널지오그래피', '안녕,자두야', '토토가'];
// console.log(programs);
// const addedProgram = question(`프로그램을 추가하세요. `);
// const addedIndex = questionInt('몇번 인덱스에 추가할까요? ');
// programs.splice(addedIndex, 0, addedProgram);
// console.log(programs);

//79
// const nums = [];

// while (true) {
//   const userNum = questionInt('숫자를 입력하세요');
//   nums.push(userNum);

//   if (nums.length >= 3) {
//     const deleteNum = question('마지막 숫자를 저장하시겠습니까?(y/n)');
//     if (deleteNum === 'n') {
//       nums.pop();
//       console.log(nums);
//       break;
//     }
//   }
//   console.log(nums);
// }

// const subject = question("좋아하는 과목 영어로 입력: ");
// let subjectString = "";
// for (let i = 0; i < subject.length; i++) {
//   subjectString += `${subject.charAt(i)}-`;
//   subjectString = subjectString + `${subject.charAt(i)}-`;
//   // console.log(`${subject.charAt(i)}-`);
// }
// console.log(subjectString);

// const word = question("영어 단어 입력: ");
// const result = word.slice(0, 2).toUpperCase() + word.slice(2);
// console.log(result);
// const name = "zxcvzxcvzcx";
// const count1 = (null || []).length;
// console.log(count1);

// const array = name.split("");

// const newArray = array.map(el => {
//   return el + "90";
// });

// console.log(newArray);

// const pass1 = "asdf";
// const pass2 = "ASDF";

// if (pass1 === pass2) {
//   console.log("Thank you");
// } else if (pass1.toUpperCase() === pass2.toUpperCase()) {
//   console.log("They must be in the same case");
// } else {
//   console.log("Incorrect");
// }

let party = [];
for (let i = 0; i++; i < 3) {
  party.push(question("파티에 초대할 이름 입력: "));
}

while (true) {
  const addName = question("추가할 사람이 있나요?(y/n) ");
  if (addName === "y") {
    const newName = question("파티에 초대할 사람 추가 입력: ");
    party.push(newName);
  } else if (addName === "n") {
    console.log(`파티에 초대한 사람은 총 ${party.length}명`);
    break;
  }
  console.log(party);
}

const user1 = question("배열에 이름중 하나 입력: ");
const index = party.indexOf(user1);
const user2 = question(
  `이름: ${user1}, 인덱스 번호: ${index} 를 정말 파티에 초대할거야? (y/n) `
);
if (user2 === "n") {
  party.splice(index, 1);
}
console.log(`전체 초대된 사람들 목록은 [${party}] 이다`);
