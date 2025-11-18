import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarComponent from './Components/NavbarComponent'
import About from './About'
import FormComponent from './Components/FormComponent'
import TableComponent from './Components/TableComponent'
import CounterExample from './Components/CounterExample'
import MapComponent from './Components/MapComponent'
import FetchDataFromApi from './Components/FetchDataFromAPi'
import Greeting from './Components/GreetingProps'
import GreetingProps from './Components/GreetingProps'
import ShowEmployees from './Components/ShowEmployees'
import AddEmployee from './Components/AddEmployee'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const  homepage=()=>{
  return(
    <>
    <NavbarComponent/>
    <h1>Welcom to Home Page</h1>
    </>
  )
}


const  showemployee=()=>{
  return(
    <>
    <NavbarComponent/>
    
  <ShowEmployees/>
    </>
  )
}

const  addemployee=()=>{
  return(
    <>
    <NavbarComponent/>
  <AddEmployee/>
    </>
  )
}

function App() {

  const myrouter= createBrowserRouter([{path:'/',Component: homepage},{path:'/showemployee',Component: showemployee},{path:'/addemployee',Component: addemployee}])
  return (
    <>
   <RouterProvider router={myrouter}/>

     </>
  )
}

export default App
