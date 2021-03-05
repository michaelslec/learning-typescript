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

function Log2(
  target: Product | typeof Product,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: Product | typeof Product,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(
  target: Product | typeof Product,
  name: string | Symbol,
  position: number
) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(title: string, _price: number) {
    this.title = title;
    this._price = _price;
  }

  @Log2
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error("Invalid price - should be positive");
  }

  get price(): number {
    return this._price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

const test = new Product("Shampoo", 20);
// test.price = -1; throws correct runtime error
