const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const generateTeam = require("./src/pagetemplate.js");
const path = require("path");
const teamArray = [];

// add validate
function teamBuilder() {
  function employeePrompt() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (choices) {
        console.log(choices);
        if (choices.addEmployeePrompt == "Manager") {
          return buildManager();
        } else if (choices.addEmployeePrompt == "Engineer") {
          return buildEngineer();
        } else if (choices.addEmployeePrompt == "Intern") {
          return buildIntern();
        } else {
          return createhtmlpage();
        }
      });
  }
  function buildManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
        },

        {
          type: "input",
          name: "managerId",
          message: "What is the manager's employee ID number?",
        },

        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email address?",
        },

        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamArray.push(manager);
        employeePrompt();
      });
  }

  function buildEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },

        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID number?",
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
        },

        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamArray.push(engineer);
        employeePrompt();
      });
  }

  function buildIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },

        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID number?",
        },

        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
        },

        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamArray.push(intern);
        employeePrompt();
      });
  }
  function createhtmlpage() {
    console.log("Team created!");
    fs.writeFileSync(
      "./dist/Employees.html",
      generateTeam(teamArray),
      (err) => {
        if (err) throw new Error(err);
        else {
          console.log("html created");
        }
      }
    );
  }
  employeePrompt();
}

teamBuilder();
