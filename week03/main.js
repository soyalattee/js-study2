import { question } from "readline-sync";

const users = { name: "elie", age: 20, gsn: "141414", money: 300000 };

console.log(users.money);

users.money = 400000;

console.log(users.money);
users.name = "soyeon";
users.age = 25;
console.log(users + `입니다`); // 문자랑 + 객체(변수)
console.log(` ${users} 입니다`);

//26번 a e u i o
const str = question("단어를 입력하세요...");
if (
  str.charAt(0) == "a" ||
  str.charAt(0) == "e" ||
  str.charAt(0) == "u" ||
  str.charAt(0) == "i" ||
  str.charAt(0) == "o"
) {
  console.log(str.concat("way"));
} else {
  console.log(str.slice(1) + str.charAt(0) + "ay");
}
