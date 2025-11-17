import React, { useEffect, useState } from 'react'
import TableComponent from './TableComponent';
import { getAllEmployees, updateEmployee, deleteEmployee } from "./EmployeeService"

const ShowEmployees = () => {

  const [Employees, setAllEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    getAllEmployees()
      .then((resp) => setAllEmployees(resp.data))
      .catch((error) => console.log(error));
  };

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const editHandler = (emp) => {
    setForm({
      name: emp.name,
      email: emp.email,
      department: emp.department,
      salary: emp.salary
    });
    setEditId(emp.id);
  };

  const deleteHandler = (id) => {
    deleteEmployee(id)
      .then(() => {
        alert("Employee deleted successfully!");
        loadEmployees(); 
      })
      .catch(err => console.log(err));
  };

  const updateHandler = () => {
    updateEmployee(form, editId)
      .then(() => {
        alert("Employee updated successfully!");

        setEditId(null);
        setForm({ name: "", email: "", department: "", salary: "" });
        loadEmployees();
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ padding: "20px" }}>

      {editId && (
        <>
          <h2>Edit Employee</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={onChangeHandler}
          /> <br />

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChangeHandler}
          /> <br />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={onChangeHandler}
          /> <br />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={onChangeHandler}
          /> <br />

          <button onClick={updateHandler}>Update</button>
        </>
      )}

      <hr />

      <TableComponent
        employeeprops={Employees}
        onEdit={editHandler}
        onDelete={deleteHandler}
      />

    </div>
  );
};

export default ShowEmployees;
