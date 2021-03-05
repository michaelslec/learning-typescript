type Admin = {
  name: string;
  priveleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Michael",
  priveleges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable | Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();

  return a + b;
}

const result = add("Michael", " LeCompte");
result.split(" ");

const fetcheduserData = {
  id: "u1",
  name: "Michael",
  job: { title: "CEO", description: "our company" },
};

console.log(fetcheduserData?.job?.title);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("priveleges" in emp) console.log("Priveleges: " + emp.priveleges);
  if ("startDate" in emp) console.log("Start Date " + emp.startDate);
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if (animal.type === "bird")
    console.log("moving with speed: " + animal.flyingSpeed);
}

moveAnimal({ type: "bird", flyingSpeed: 20 });

// const userInputElement = document.getElementById("user-input") as HTMLInputElement;
const userInputElement = document.getElementById("user-input");
if (userInputElement)
  (userInputElement as HTMLInputElement).value = "Hi there!";

interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};
