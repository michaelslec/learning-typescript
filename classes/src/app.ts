class Department {
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  showEmployees(this: Department) {
    console.log(this.employees);
  }
}

console.log(Department.createEmployee("Michael"));

const accounting = new Department("acct", "Accounting");
accounting.describe();
accounting.addEmployee("Michael");
accounting.showEmployees();

// const accountingCopy = { name: "s", id: "asdf", describe: accounting.describe };
// accountingCopy.describe();

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  addEmployee(this: ITDepartment, employee: string) {
    this.employees.push("IT: " + employee);
  }
}

const it = new ITDepartment("t1", ["Michael"]);

it.addEmployee("Michael");
it.showEmployees();
