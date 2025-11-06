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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <FetchDataFromApi/>
   <MapComponent/>
    <h1>Hello This is my first react app</h1>
   <CounterExample/>
   
     </>



  )
}

export default App
