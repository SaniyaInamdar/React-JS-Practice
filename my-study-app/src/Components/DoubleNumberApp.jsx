import React, { useState } from 'react'

const DoubleNumberApp = () => {

 const [number, setNumber]=useState(0)

  function getTheNumber(e){
      setNumber(Number(e.target.value ))
  }

  function doubleNumber(){
    setNumber(number*2)
  }

  function resetValue(){
    setNumber(0)
  }

  function setDefaultValue(){
    if(number==0){
      setNumber(" ")
    }
  }

  return (
    <div>
      <h1>Double The Number</h1>
      Enter a number  : <input type="number" onChange={getTheNumber} onFocus={setDefaultValue} value={number}/><br /> <br />
      <button onClick={doubleNumber}>Double It</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  )
}

export default DoubleNumberApp
