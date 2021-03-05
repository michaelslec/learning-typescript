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

class AccountingDepartment extends Department {
  lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance !== undefined) {
      return this.instance;
    }

    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
}

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
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

if (accounting === accounting2) console.log("singleton works!");
console.log(Department.createEmployee("Michael"));

accounting.describe();
it.addEmployee("Michael");
it.showEmployees();
it.describe();
