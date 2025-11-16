import React from 'react'
import { useEffect, useState } from "react"
import TableComponent from './TableComponent';
import { getAllEmployees } from "./EmployeeService"

const ShowEmployees = () => 
  
  {
  const[Employees, setAllEmployees]=useState([])

  useEffect(()=>{
    loadEmployees();
  },[]);

  const loadEmployees=()=>{
    getAllEmployees()
    .then((resp) => setAllEmployees(resp.data))
    .catch((error) => console.log(error));
  }
  {
  return (
    <div>
      <TableComponent  employeeprops={Employees}/>
    </div>
  )
}
  }
export default ShowEmployees
