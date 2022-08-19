const express = require("express");
const mysql = require("mysql");
const app = express();

//Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: " ",
  database: "employee_db",
});

//Connect to mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql connected");
});

//Create DB
app.get("/createDB", (req, res) => {
  let sql = "CREATE DATABASE employee_db";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Database Created");
  });
});
