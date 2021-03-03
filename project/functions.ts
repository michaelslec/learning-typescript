function printResults(num: number): void {
  console.log(num);
}

function add(n1: number, n2: number) {
  return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValue: (arg0: number, arg1: number) => number;

combineValue = add;
// combineValue = printResults;
// combineValue = 5;

console.log(combineValue(8, 8));

addAndHandle(10, 20, (n) => console.log(n));
