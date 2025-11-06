import React, { useState, useEffect } from "react";
import "./MapComponent.css";
function FetchDataFromApi(){

   const [customer, setCustomer] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/get-all-customers")
      .then(response => response.json())
      .then(data => setCustomer(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return(
    <>
    <div className="table-wrap">
    <table className="emp-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Licence Number</th>
        </tr>
      </thead>
      <tbody>
        {customer.map(cus=>(
        <tr key={cus.id}>
          <td>{cus.id}</td>
          <td>{cus.name}</td>
          <td>{cus.email}</td>
          <td>{cus.phone}</td>
          <td>{cus.licencenumber}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}
export default FetchDataFromApi