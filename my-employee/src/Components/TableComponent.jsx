import { useEffect, useState } from "react"
import { getAllEmployees } from "./EmployeeService"

function TableComponent({ employeeprops, onEdit, onDelete }) {

  return (
    <>
      <div>
        <center>
          <table border='1'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employeeprops.map((emp) =>
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>{emp.salary}</td>

                  <td>
                    <button onClick={() => onEdit(emp)}>Edit</button>
                    <button onClick={() => onDelete(emp.id)}>Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </center>
      </div>
    </>
  )
}

export default TableComponent;
