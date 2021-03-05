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

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>Hello, App!</h1>", "app")
class Person {
  name = "max";

  constructor() {
    console.log("Creating person object");
  }
}

function Log(target: any | typeof Product, propertyName: string | Symbol) {
  console.log("Decorator!");

  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;

  constructor(title: string, private _price: number) {
    this.title = title;
  }

  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error("Invalid price - should be positive");
  }

  get price(): number {
    return this._price;
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}

const test = new Product("Shampoo", 20);
// test.price = -1; throws correct runtime error
