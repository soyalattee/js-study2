// fs -> fs promise로 변경
import { writeFile, readFile, appendFile, open } from "fs/promises";
import { question, questionInt } from "readline-sync";
//https://nodejs.org/api/fs.html
const databyString = "1,2,3,4,5";

//105 file 생성
function quiz105() {
  writeFile("./assets/numbers.txt", databyString, (err) => {
    if (err) throw err;
    console.log("file saved!");
  });
}

//106
function appendName(name) {
  appendFile("./assets/names.txt", name + "\n", (err) => {
    if (err) throw err;
    console.log("The data was appended to file!");
  });
}

function quiz106() {
  writeFile("./assets/names.txt", "", (err) => {
    if (err) throw err;
    console.log("file saved!");
  });

  for (let i = 0; i < 5; i++) {
    const name = question("이름을 입력하세요.");
    appendName(name);
  }
}

//107
function quiz107() {
  readFile("./assets/names.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}

//108
function quiz108() {
  const path = "./assets/names.txt";
  open(path, "a+", (err, fd) => {
    if (err) throw err;
    const name = question("name plz, ");
    write(fd, name + "\n", "utf-8", function (err, written, buffer) {});
  });
  readFile("./assets/names.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}

// flag 옵션
function test() {
  const name = question("name?");
  //flag
  //r: reading모드, write에 써서 추가하려고하니 error
  //a: append
  // rs+ : 맨앞에 덮어써짐
  writeFile("./assets/names.txt", name, { flag: "rs+" }, (err) => {
    if (err) throw err;
    console.log("file saved!");
  });
  readFile("./assets/names.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}
function createSub(path) {
  const subject = question("enter subject : ");
  writeFile(path, subject, "utf-8", (err) => {
    if (err) throw err;
    console.log("file saved!");
  });
}
function readSub(path) {
  readFile(path, "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}

function quiz109() {
  const path = "./assets/Subject.txt";
  console.log(
    "1. Create a new file \n2.Display the file \n3.Add a new item to the file Make a selection 1, 2 or 3:"
  );
  const choice = questionInt("enter 1,2 or 3 : ");
  switch (choice) {
    case 1:
      createSub(path);
      break;
    case 2:
      readSub(path);
      break;
    case 3:
      createSub(path);
      readSub(path);
      break;
    default:
      console.log("Error! enter the collect number.");
      break;
  }
}

async function quiz110() {
  const path = "./assets/names.txt";
  const names = await readFile(path, "utf-8", (err, data) => {
    return data;
  });
  const nameList = names.toString().split("\n");
  console.log(nameList);
  const name = await question("name, one of the list, ");

  nameList.forEach((value, idx) => {
    if (value === name) return;
    appendFile("./assets/names2.txt", value + "\n", "utf-8", (err, fd) => {
      if (err) throw err;
    });
  });
}

quiz110();
