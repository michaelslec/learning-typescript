abstract class Department {
  protected employees: string[] = [];
  static fiscalYear = 2020;

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

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

class AccountingDepartment extends Department {
  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
}

const accounting = new AccountingDepartment("a1", "Accounting");
accounting.describe();

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }

  addEmployee(this: ITDepartment, employee: string) {
    this.employees.push("IT: " + employee);
  }
}

const it = new ITDepartment("t1", ["Michael"]);

it.addEmployee("Michael");
it.showEmployees();
it.describe();
