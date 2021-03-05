function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: typeof Person) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl !== null) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("LOGGING - PERSON")
@WithTemplate("<h1>Hello, App!</h1>", "app")
class Person {
  name = "max";

  constructor() {
    console.log("Creating person object");
  }
}
