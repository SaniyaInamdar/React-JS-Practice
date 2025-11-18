import { NavLink } from "react-router-dom"
import './NavbarComponentCSS.css';


function NavbarComponent(){
  return(
  <>
  <ul>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/showemployee'}>Show Employee</NavLink></li>
     <li><NavLink to={"/addemployee"}>Add Employee</NavLink></li>
  </ul>
  </>
  )
}

export default NavbarComponent