class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new Department("acct", "Accounting");

accounting.describe();

const accountingCopy = { describe: accounting.describe };

accountingCopy.describe();
