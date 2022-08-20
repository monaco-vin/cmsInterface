const express = require("express");
const mysql = require("mysql");
const inquirer = require("inquirer");
const app = express();

//Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bootcamp",
  database: "employee_db",
});

//Connect to mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql connected");
  startPrompt();
});

//Start the dance
startPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select an option.",
        name: "choice",
        choices: [
          "View all departments?",
          "View all roles?",
          "View all employees?",
          "Add a department?",
          "Add a role?",
          "Add an employee?",
          "Update an employee's role?",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer);
      let userChoice = answer.choice;
      console.log(userChoice);
      switch (userChoice) {
        case "View all departments?":
          viewAllDepartments();
          break;
        case "View all roles?":
          viewAllRoles();
          break;
        case "View all employees?":
          viewAllEmployees();
          break;
        case "Add a department?":
          addDepartment();
          break;
        case "Add a role?":
          addRole();
          break;
        case "Add an employee?":
          addEmployee();
          break;
        case "Update an employee's role?":
          updateRole();
          break;
      }
    });
};
