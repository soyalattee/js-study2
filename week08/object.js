const ellie = { name: "ellie", age: 4 };

for (let key in ellie) {
  // ellie에 속한 키값이 돌때마다 지역변수인 key에 할당된다
  console.log(key); // 출력값 : name age hasjob
}

// for(value of iterable)
const arry = [1, 2, 3, 4];
for (let value of arry) {
  // arry에 있는 모든 값이 value에 할당되면서 블럭안에서 출력하거나 계산함
  console.log(value); // 출력값 1 2 3 4
}
