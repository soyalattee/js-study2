// fs -> fs promise로 변경
import { writeFile, readFile, appendFile, open } from "fs/promises";

import { question, questionInt } from "readline-sync";
//https://nodejs.org/api/fs.html

//quiz 111 : csv 파일 새성

//112
const path = "./assets/Books.csv";

var bookData = await readFile(path, "utf-8", (err, data) => {
  return data;
});
// idx, title, author, publication, date
var bookList = bookData.toString().split("\n");

async function quiz112() {
  const newRecord = question(
    "add a new record (title,author,publication,date)"
  );
  //인덱싱을 미리 받고 그 다음 인덱싱으로 넣어줘야할듯
  appendFile(
    path,
    `${bookList.length - 2},` + newRecord + "\n",
    "utf-8",
    (err, fd) => {
      if (err) throw err;
    }
  );
  const books = await readFile(path, "utf-8", (err, data) => {
    return data;
  });
  console.log(books);
}

async function quiz113() {
  let count = questionInt("how many book you wanna add? : ");
  let idx = 0;
  while (count > 0) {
    const newRecord = question("add a new record (title,author,date)");
    //인덱싱을 미리 받고 그 다음 인덱싱으로 넣어줘야할듯

    appendFile(
      path,
      `${bookList.length - 2 + idx},` + newRecord + "\n",
      "utf-8",
      (err, fd) => {
        if (err) throw err;
      }
    );
    idx++;
    count--;
  }
  const books = await readFile(path, "utf-8", (err, data) => {
    return data;
  });

  bookList = books.split("\n");
  const author = question("author plz : ");
  bookList.forEach((value, idx) => {
    if (value.split(",")[2] == author) {
      console.log(value);
    }
  });
}

async function quiz114() {
  console.log(bookList);
  let startDate = questionInt("start Date ? : ");
  let endDate = questionInt("end Date ? : ");
  bookList.forEach((value, idx) => {
    if (value.split(",")[3] >= startDate && value.split(",")[3] <= endDate) {
      console.log(value);
    }
  });
}
async function quiz115() {
  bookList.forEach((value, idx) => {
    console.log(value);
  });
}

async function quiz116() {
  bookList.forEach((value, idx) => {
    console.log(value);
  });
  // 제거
  let idx = questionInt("which record does you wanna remeve ?");
  bookList.splice(idx + 1, 1);

  writeFile("./assets/Books.csv", bookList.join("\n"), (err) => {
    if (err) throw err;
    console.log("file saved!");
  });

  let newBookData = await readFile(path, "utf-8", (err, data) => {
    return data;
  });
  console.log(bookList);

  // 수정 (해당 인덱스에 덮어쓰기)
  idx = questionInt("which record does you wanna edit ?");
  console.log(bookList[idx + 1]);
  let content = question("edit the content");
  bookList.splice(idx + 1, 1, content);
  writeFile("./assets/Books.csv", bookList.join("\n"), (err) => {
    if (err) throw err;
    console.log("file saved!");
  });
}

let score = 0;
function addNumber() {
  const firstNum = questionInt("first num : ");
  const secondNum = questionInt("second num : ");
  const answer = questionInt(`${firstNum} + ${secondNum} = ?`);
  if (answer === firstNum + secondNum) score++;
  return `${firstNum} + ${secondNum},${answer}`;
}
async function quiz117() {
  const personName = question("name pz : ");
  const quiz1 = addNumber();
  const quiz2 = addNumber();

  appendFile(
    "./assets/scores",
    `${personName},${quiz1},${quiz2},${score}` + "\n",
    "utf-8",
    (err, fd) => {
      if (err) throw err;
    }
  );
  const books = await readFile(path, "utf-8", (err, data) => {
    return data;
  });
}

quiz116();
