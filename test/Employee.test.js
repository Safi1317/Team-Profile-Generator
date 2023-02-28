const Employee = require("../lib/Employee.js");
describe("testing name", () => {
  it("testing name", () => {
    const name = "Safia";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
  });
});

describe("testing id", () => {
  it("testing id", () => {
    const newId = 5;
    const employeeInstance = new Employee("Safia", newId);
    expect(employeeInstance.id).toBe(newId);
  });
});

describe("testing email", () => {
  it("Testing email", () => {
    const email = "ali.swaphiyah@gmail.com";
    const employeeInstance = new Employee("Safia", email);
    expect(employeeInstance.email).toBe(email);
  });
});

describe("Testing role.", () => {
  test("Testing role.", () => {
    const role = "Employee";
    const employeeInstance = new Employee(
      "Safia",
      5,
      "ali.swaphiyah@gmail.com"
    );
    expect(employeeInstance.getRole()).toBe(role);
  });
});
