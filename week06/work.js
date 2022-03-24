"use strict";
import { question, questionInt, questionFloat } from "readline-sync";

const user = {
  name: "soyeon",
  age: -1,
};

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    if (value < 0 || value > 199) {
      this._age = 10;
    } else {
      this._age = value;
    }
  }
  // get hobby() {
  //   return this._hobby;
  // }
  // set hobby(value) {
  //   this._hobby = value;
  // }
}

const user1 = new User("stv", "soya", -1000);
user1.hobby = "dancedantce";
// user1.age = -13131;
// user1.fafa = "fafafafa";
// user1.age = 121;
console.log(user1.age);
