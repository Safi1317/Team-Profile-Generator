const Intern = require("./lib/Intern.js");
test("Testing role.", () => {
  const role = "Intern";
  const employeeInstance = new Employee("Safia", 5, "ali.swaphiyah@gmail.com");
  expect(employeeInstance.getRole()).toBe(role);
});
test("Testing school.", () => {
  const newSchool = "University of Minnesota";
  const employeeInstance = new Intern(
    "Safia",
    5,
    "ali.swaphiyah@gmail.com",
    newSchool
  );
  expect(employeeInstance.school).toBe(newSchool);
});
