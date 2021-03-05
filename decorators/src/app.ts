function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl !== null) hookEl.innerHTML = template;
  };
}

// @Logger("LOGGING - PERSON")
@WithTemplate("<h1>Hello, App!</h1>", "app")
class Person {
  name = "max";

  constructor() {
    console.log("Creating person objecth");
  }
}

const pers = new Person();
console.log(pers);
