const Engineer = require("./lib/Engineer.js");
test("Testing role.", () => {
  const role = "Engineer";
  const employeeInstance = new Employee("Safia", 5, "ali.swaphiyah@gmail.com");
  expect(employeeInstance.getRole()).toBe(role);
});
test("Testing github.", () => {
  const testGithub = "Safi1317";
  const employeeInstance = new Engineer(
    "Safia",
    5,
    "ali.swaphiyah@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});
