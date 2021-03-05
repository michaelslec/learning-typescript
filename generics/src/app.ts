// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, _) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObj = merge({ name: "Michael" }, { age: 22 });
console.log(mergedObj.name);
