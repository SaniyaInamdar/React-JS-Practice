import React, { useState } from 'react'

const SquareAndCubeFinderApp = () => {

  const[number,setNumber]=useState(0);


  return (
    <div>
      <h1>Find Square and Cube</h1>
      Enter Number : <input type="number" onChange={userInput} />
      <button onClick={squareFind}>Square</button>
      <button onClick={cubeFind}>Cube</button>
    </div>
  )
}

export default SquareAndCubeFinderApp
