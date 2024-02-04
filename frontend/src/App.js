import React, { useState, useEffect } from 'react';

function DataTable({ apiUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, [apiUrl]);

  const columnNames = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <table>
      <thead>
        <tr>
          {columnNames.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columnNames.map((key) => (
              <td key={key}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div>
      <div className="text">
        <h2>Departments Table</h2>
      </div>
      <DataTable apiUrl="http://localhost:4000/api/departments" />
      <div className="text">
        <h2>Employees Table</h2>
      </div>
      <DataTable apiUrl="http://localhost:4000/api/employees" />
      <div className="text">
        <h2>Highest-Paid Employees by Department</h2>
      </div>
      <DataTable apiUrl="http://localhost:4000/api/task" />
    </div>
  );
}

export default App;
