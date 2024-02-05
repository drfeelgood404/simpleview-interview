const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

app.get('/api/employees', (req, res) => {
    const sqlQuery = 'SELECT * FROM Employees';
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/api/departments', (req, res) => {
    const sqlQuery = 'SELECT * FROM Departments';
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/api/task', (req, res) => {
    const sqlQuery = `SELECT
    d.DepartmentName,
    e.Name,
    t.Salary
  FROM Departments d
  INNER JOIN (
    SELECT DepartmentID, MAX(Salary) AS Salary
    FROM Employees
    GROUP BY DepartmentID
  ) t ON t.DepartmentID = d.DepartmentID
  INNER JOIN Employees e ON e.DepartmentID = t.DepartmentID AND e.Salary = t.Salary`;
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
