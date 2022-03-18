'use strict';
import { question, questionInt } from 'readline-sync';

/**
 * 069
다섯 개의 국가 이름을 담고 있는 배열을 만들고 배열 전체를 출력하라.
표시된 국가 이름들 중 하나를 입력하라고 사용자에게 요청하고,
입력된 국가 이름의 인덱스 번호(즉, 목록에서의 위치)를 출력하라.


070
사용자에게 숫자를 입력하라고 요청하고, 입력한 위치의 국가 이름이 출력되는 기능을 069번 프로그램에 추가하라.


071
두 개의 스포츠 이름을 담고 있는 배열을 생성하라.
사용자에게 좋아하는 스포츠가 무엇인지 물어보고 그것을 배열 끝에 추가하라.
배열을 정렬하고 출력하라.


072
교과목 여섯 개가 담긴 배열을 생성하라.
이들 중 사용자가 좋아하지 않는 과목을 묻고 그 과목을 배열에서 삭제한 후에 배열을 다시 출력하라.


073
사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고 그것들은 인덱스 번호 1부터 시작하는 객체에 저장한다.
인덱스 번호와 항목이 모두 표시되도록 객체를 출력한다.
사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
남아 있는 객체를 다시 출력하라.


074
열 개의 색상이 담긴 배열을 생성한다.
사용자에게 0에서 4 사이의 시작 번호와 5에서 9 사이의 끝 번호를 입력하라고 요청하고
입력된 시작 번호부터 끝 번호까지의 색상을 출력하라.


075
세자리 숫자 네 개가 담긴 배열을 생성한다.
배열의 각 항목을 한 줄에 하나씩 출력하여 사용자에게 표시한다.
사용자에게 세 자리의 숫자를 입력하라고 요청한다.
만약 입력한 숫자가 배열에 있는 숫자들 중 하나라면 배열에 그 숫자가 위치한 인덱스를 출력하라.
그렇지 않다면 "That is not in the list"라는 메시지를 출력하라.


076
사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 배열에 저장한다.
모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
만약 그렇다면 "n"이라고 답할 때까지 이름을 추가하게 한다.
"n"이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라.


077
076번 프로그램을 수정하여 초대할 사람들의 이름이 배열에 모두 추가되면 전체 명단을 출력하고 배열에 있는 이름들 중 하나를 입력하라고 요청한다.
입력된 이름의 위치(인덱스)를 출력하고 그 사람을 정말로 파티에 초대할 것인지를 묻는다.
만약 "n"이라고 답하면 그 항목을 배열서 삭제하고 배열을 다시 출력한다.


078
네 개의 TV 프로그램 타이틀을 담은 배열을 생성하고 각 항목을 한 줄씩 출력한다.
사용자에게 다른 프로그램을 입력하도록 요청하고 배열에서의 원하는 위치를 묻는다.
입력한 프로그램 타이틀을 원하는 위치에 삽입하고 다섯 개 의 TV 프로그램 모두를 다시 출력한다.


079
'nums'라는 이름의 빈 배열을 생성한다.
사용자에게 숫자를 입력하라고 요청한다.
숫자가 입력되면 그것을 nums 배열 끝에 추가하고 배열을 출력한다.
세 개의 숫자를 입력받으면 마지막 숫자를 저장할 것인지 묻는다.
만약 "n"이라고 답하면 배열의 마지막 항목을 삭제하고 배열을 출력하라.
 */

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
const nums = [];

while (true) {
  const userNum = questionInt('숫자를 입력하세요');
  nums.push(userNum);

  if (nums.length >= 3) {
    const deleteNum = question('마지막 숫자를 저장하시겠습니까?(y/n)');
    if (deleteNum === 'n') {
      nums.pop();
      console.log(nums);
      break;
    }
  }
  console.log(nums);
}
