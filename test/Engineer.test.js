const Engineer = require("../lib/Engineer.js");
describe("Testing role.", () => {
  it("Testing role.", () => {
    const role = "Engineer";
    const employeeInstance = new Employee(
      "Safia",
      5,
      "ali.swaphiyah@gmail.com"
    );
    expect(employeeInstance.getRole()).toBe(role);
  });
});

describe("Testing github", () => {
  it("Testing github.", () => {
    const testGithub = "Safi1317";
    const employeeInstance = new Engineer(
      "Safia",
      5,
      "ali.swaphiyah@gmail.com",
      testGithub
    );
    expect(employeeInstance.getGithub()).toBe(testGithub);
  });
});
