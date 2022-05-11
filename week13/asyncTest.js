let asyncFunc1 = (msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      `func1 : ${msg}`;
      resolve("11");
    }, 1000);
  });
};
let asyncFunc2 = (msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      `func2 : ${msg}`;
      resolve("11");
    }, 1000);
  });
};
async function asyncMain() {
  let result = await asyncFunc1("Heello");
  console.log(result);
  result = await asyncFunc2("world");
  console.log(result);
}

asyncMain();
