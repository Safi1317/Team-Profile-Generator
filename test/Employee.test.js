const Employee = require("./lib/Employee");

test("testing name", () => {
  const name = "Safia";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("testing id", () => {
  const newId = 5;
  const employeeInstance = new Employee("Safia", newId);
  expect(employeeInstance.id).toBe(newId);
});

test("Testing email", () => {
  const email = "ali.swaphiyah@gmail.com";
  const employeeInstance = new Employee("Safia", email);
  expect(employeeInstance.email).toBe(email);
});

test("Testing role.", () => {
  const role = "Employee";
  const employeeInstance = new Employee("Safia", 5, "ali.swaphiyah@gmail.com");
  expect(employeeInstance.getRole()).toBe(role);
});
