import React, { useState } from 'react'

const SquareAndCubeFinderApp = () => {

  const[number,setNumber]=useState(0);

  function cubeFind(){
    alert("Cube of  "+number +" is : "+ number*number*number)
  }

  function squareFind(){
    alert("Square of  "+number +" is : "+ number*number)
  }

  function userInput(e){
    setNumber(e.target.value)
  }

  function defaultValue(){
      setNumber("")
  }
  return (
    <div>
      <h1>Find Square and Cube</h1>
      Enter Number : <input type="number" onChange={userInput} value={number}  onFocus={defaultValue}/>
      <button onClick={squareFind}>Square</button>
      <button onClick={cubeFind}>Cube</button>
    </div>
  )
}

export default SquareAndCubeFinderApp
