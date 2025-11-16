import axios from "axios";

export const getAllEmployees=()=> axios.get("http://localhost:8080/find-all-employee");

export const addEmployee=(employee)=> axios.post("http://localhost:8080/add-new-employee",employee);

export const updateEmployee=(employee,id)=> axios.put("http://localhost:8080/update-employee-by-id/${id}",employee);

export const deleteEmployee=(id)=> axios.delete("http://localhost:8080/delete-employee-by-id/${id}");

