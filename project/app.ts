function combine(n1: number | string, n2: number | string) {
  let result: number | string;

  if (typeof n1 === "number" && typeof n2 === "number") result = n1 + n2;
  else result = n1.toString() + n2.toString();

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combineNames = combine("Max", "anna");
console.log(combineNames);
