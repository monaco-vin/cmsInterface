/* Create DATABASE */
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;
/* Create DEPARTMENT */
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);
/* Create ROLE */
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);
/* Create EMPLOYEE */
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL
);