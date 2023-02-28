const Intern = require("../lib/Intern");
describe("Testing role.", () => {
  it("Testing role.", () => {
    const role = "Intern";
    const interntest = new Intern("Safia", 5, "ali.swaphiyah@gmail.com");
    expect(interntest.getRole()).toBe(role);
  });
});

describe("Testing school", () => {
  it("Testing school.", () => {
    const newSchool = "University of Minnesota";
    const employeeInstance = new Intern(
      "Safia",
      5,
      "ali.swaphiyah@gmail.com",
      newSchool
    );
    expect(employeeInstance.school).toBe(newSchool);
  });
});
