"use strict";
import { question, questionInt, questionFloat } from "readline-sync";

const myInfo = { name: "soyen", age: 28 };
//삭제 가능
delete myInfo.age;

console.log(myInfo);

// 접근법

console.log(myInfo.name);
console.log(myInfo["name"]);
myInfo["hobby"] = "coding";
console.log(myInfo.hobby);

//Constructor func
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const soyeon = new Person("yeon", 23);
console.log(soyeon);

// for in
console.clear();
for (let key in soyeon) {
  console.log(key);
  console.log(soyeon[key]);
}

// for of
const arr = [1, 2, 3, 4, 5, 6, 7];
for (let value of arr) {
  console.log(value);
}

//Object assign
const user4 = Object.assign({}, soyeon);
user4.name = "sangseon";
console.log(user4, soyeon);
