"use strict";
import { question, questionInt } from "readline-sync";

const user = {
  //object : 1 ~2가지 이상의 데이터를 묶어놓은 것
  //primitive type :ex) number, string, boolean
  // reference type(object ) : array,,,. object
  // function
  array: [1, 2, 3, 4, 5],
  item: {},
  func: function () {},
};

const ellie = { name: "ellie", age: 4 };
// print(ellie);
const soyeon = { firstName: "soyeon", lastName: "park" };
console.log(ellie.name); // .를 사용하여 오브젝트 변수를 입력 // 일반적인 코딩시 . 을 사용함
console.log(ellie["name"]); // []을 사용하여 안에 오브젝트 안에 있는 변수의 이름을 '스트링' 타입으로 넣기 // 정확하게 어떤 키인지 모를 때 사용
ellie["hasjob"] = true;
console.log(ellie.hasjob);

function printValue(obj, key) {
  console.log(obj[key]); // 어떤 키인지 모를 때 [] 사용
}

printValue(ellie, "name");
printValue(ellie, "age");
printValue(soyeon, "firstName");
