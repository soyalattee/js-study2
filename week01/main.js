import { question } from "readline-sync";
import utf8 from "utf8";
const name = question("이름을 입력하세요...", {
  encoding: "utf8",
});

console.log(`안녕하세요 ${name}`);
