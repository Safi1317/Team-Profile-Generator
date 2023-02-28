const Manager = require("../lib/Manager.js");

describe("Get name", () => {
  it("Testing role.", () => {
    const role = "Manager";
    const employeeInstance = new Employee(
      "Safia",
      5,
      "ali.swaphiyah@gmail.com"
    );
    expect(employeeInstance.getRole()).toBe(role);
  });
});

describe("Get name", () => {
  it("Testing officeNumber.", () => {
    const newOfficeNumber = 003367;
    const employeeInstance = new Manager(
      "Safia",
      5,
      "ali.swaphiyah@gmail.com",
      newOfficeNumber
    );
    expect(employeeInstance.officeNumber).toBe(newofficeNumber);
  });
});
