USE employee_db;
/* DEPARTMENT array */
INSERT INTO department (employee_name)
VALUES ('Sales'),
('Engineering'),
('Finance'),
('Legal');
/* ROLE array */
INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 120000, 1),
('Salesperson', 70000, 1),
('Engineer Lead', 140000, 2),
('Software Engineer', 110000, 2),
('Account Manager', 125000, 3),
('Accountant', 105000, 3),
('Legal Lead', 180000, 4),
('Lawyer', 135000, 4);
/* EMPLOYEE array */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Wayne', 'Gretzky', 1, 1),
('Gordie', 'Howe', 2, NULL),
('Alex', 'Ovechkin', 2, NULL),
('Jaromir', 'Jagr', 3, 3),
('Brett', 'Hull', 4, NULL),
('Marcel', 'Dionne', 4, NULL),
('Phil', 'Esposito', 5, 5),
('Mike', 'Gartner', 6, NULL),
('Mark', 'Messier', 6, NULL),
('Steve', 'Yzerman', 7, 7),
('Mario', 'Lemieux', 8, NULL),
('Teemu', 'Selanne', 8, NULL);