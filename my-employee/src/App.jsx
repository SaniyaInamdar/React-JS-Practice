import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponent from './NavbarComponent'
import About from './About'
import FormComponent from './Components/FormComponent'
import TableComponent from './Components/TableComponent'
import CounterExample from './Components/CounterExample'
import MapComponent from './Components/MapComponent'
import FetchDataFromApi from './Components/FetchDataFromAPi'
import Greeting from './Components/GreetingProps'
import GreetingProps from './Components/GreetingProps'
import ShowEmployees from './Components/ShowEmployees'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <FetchDataFromApi/>
   <MapComponent/>
    <h1>Hello This is my first react app</h1>
   <CounterExample/> */}
   
   <ShowEmployees/>
  <GreetingProps name="saniya"/>

     </>




  )
}

export default App
