import React, { useState } from 'react'

const EvenAndOddCheckerApp = () => {

  const [number,setNumber]=useState(0)
  const [result , setResult]=useState("")

  function resetNumber(){
    setNumber(0)
    setResult("")
  }

  function defaultValue(){
    if(number===0){
      setNumber("")
    }
  }

  function getNumber(e){
    setNumber(Number(e.target.value))
  }

   function checkNumber(){
    if(number%2===0){
      setResult("Number is even")
    }
    else{
      setResult("Number is odd")
    }
  }

  return (
    <div>
      <h1>Check if number is odd or even</h1>
       Enter a number : <input type="number" onFocus={defaultValue} onChange={getNumber} value={number}/> <br /><br />
      <h3> Result : {result} </h3>  <br /><br />
      <button onClick={checkNumber}>Check</button>
      <button onClick={resetNumber}>Reset</button>
    </div>
  )
}

export default EvenAndOddCheckerApp
