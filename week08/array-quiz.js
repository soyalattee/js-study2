"use strict";

import { cursorTo } from "readline";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.join(","));
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  console.log(fruits.split(","));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const new_array = array.splice(0, 2);
  console.log(new_array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const student = students.find(el => {
    return el.score === 90;
  });
  console.log(student);
}

// Q6. make an array of enrolled students
{
  const student_array = students.filter(el => {
    return el.enrolled === true;
  });
  console.log(student_array);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scores = students.map(el => el.score);
  console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
  let lowerThan50 = students.filter(el => el.score < 50);
  const isLowerThan50 = lowerThan50 ? true : false;
  console.log(isLowerThan50);
}
/** elie 답안  */
{
  const result = students.some(stu => stu.score < 50);
  console.log("result : ", result);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, cur) => {
    return prev + cur.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scores = students.map(el => el.score);

  console.log(scores.join(","));
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
