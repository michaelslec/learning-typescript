function Logger(constructor: Function) {
  console.log("logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "max";

  constructor() {
    console.log("Creating person objecth");
  }
}

const pers = new Person();
console.log(pers);
