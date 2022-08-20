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

//Add employee: first name - last name - employee role (select from list?) - employee's manager
const addEmployee = () => {
  inquirer
    .prompt([
      //First name
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },

      //Last name
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },

      //Employee role
      {
        type: "input",
        name: "role",
        message: "What is the employee's ID?",
      },
      //Manager ID
      {
        type: "input",
        name: "managerID",
        message: "What is the employee's manager's ID?",
      },
    ])
    .then((res) => {
      db.query(
        "INSERT INTO employee SET ?",
        {
          first_name: res.firstName,
          last_name: res.lastName,
          role_id: res.role,
          manager_id: res.managerID,
        },
        (err, res) => {
          if (err) throw err;
          console.table(res);
          startPrompt();
        }
      );
    });
};
