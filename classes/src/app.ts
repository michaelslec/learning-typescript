interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string) {}
  age = 22;

  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Michael");
user1.greet("Hi there. I'm ");
