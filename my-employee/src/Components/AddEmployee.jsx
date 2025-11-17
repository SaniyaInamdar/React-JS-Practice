import React, { useState } from 'react'
import { addEmployee } from './EmployeeService'

const AddEmployee = () => {

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[department,setDepartment]=useState("")
  const[salary,setSalary]=useState("")


  async function handleSubmit (e){
     e.preventDefault();

    
    const employee={name,email,department,salary}
    console.log(employee)
    try {
      const response = await addEmployee(employee);
      console.log(response.data);
      console.log(employee)
      alert("Employee added successfully!");

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>

    <form onSubmit={handleSubmit} >
      Name : <input type="text" value={name}  onChange={(n)=>setName(n.target.value)} /><br/><br/>
      Email : <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br/><br/>
     Department:  <input type="text" value={department} onChange={(r)=>setDepartment(r.target.value)} /> <br/><br/>
      Salary : <input type="number" value={salary} onChange={(s)=>setSalary(Number(s.target.value))} /> <br/><br/>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button><br/><br/>
    </form>

    </div>
  )
}

export default AddEmployee
