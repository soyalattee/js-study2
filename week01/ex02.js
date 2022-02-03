import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const name = rl.question("이름을 입력하세요222 ", answer => {
  console.log(`안녕하세요, ${answer}`);
  rl.close();
});

// console.log("안녕하세요", name);
