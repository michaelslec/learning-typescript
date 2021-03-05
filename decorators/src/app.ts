function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "max";

  constructor() {
    console.log("Creating person objecth");
  }
}

const pers = new Person();
console.log(pers);
