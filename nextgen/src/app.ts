const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(add(1, 2, 3, 3, 4, 4, 4, 3, 3, 4));
