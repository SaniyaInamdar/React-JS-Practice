import "./MapComponent.css";
function MapComponent() {

  const employee=[
    {"id":101,"Name":"ABC","salary":25000},
    {"id":102,"Name":"DEF","salary":89000},
    {"id":103,"Name":"GHI","salary":65000}
  ]
  return(
    <>
   <div className="table-wrap">
    <table className="emp-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employee.map((emp)=>(
        <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>{emp.Name}</td>
          <td>{emp.salary}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}
export default MapComponent