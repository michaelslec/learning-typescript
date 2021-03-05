class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new Department("acct", "Accounting");

accounting.describe();

const accountingCopy = { name: "s", id: "asdf", describe: accounting.describe };

accountingCopy.describe();
