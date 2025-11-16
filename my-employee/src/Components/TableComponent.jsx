import { useEffect, useState } from "react"
import { getAllEmployees } from "./EmployeeService"

function TableComponent(){

  const[Employees, setAllEmployees]=useState([])

  useEffect(()=>{
    loadEmployees();
  },[]);

  const loadEmployees=()=>{
    getAllEmployees()
    .then((resp) => setAllEmployees(resp.data))
    .catch((error) => console.log(error));
  }

  return(

    <>
    <div>
      <center>
      <table border='1'>
        <thead>
          <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Salary</th>
           </tr>
        </thead>
        <tbody>
          { Employees.map((emp) =>
        <tr key={emp.id} >
          <td>{emp.id}</td>
          <td>{emp.name}</td>
          <td>{emp.email}</td>
          <td>{emp.salary}</td>
          <td>{emp.department}</td>
        </tr>
          )}
        </tbody>
      </table>
      </center>
    </div>
    </>
  )
}

export default TableComponent