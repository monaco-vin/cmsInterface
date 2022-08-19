/* Create DATABASE */
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

/* Create DEPARTMENT */
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    employee_name VARCHAR(35) NOT NULL
);

/* Create ROLE */
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(35) NULL,
    salary DECIMAL(10.3) NULL,
    department_id INT NULL,
)

/* Create EMPLOYEE */
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(35) NULL,
    last_name VARCHAR(35) NULL,
    role_id INT NULL,
    manager_id INT NULL,
)