import React, { useState } from 'react'

const PositiveAndNegetiveCheckerApp = () => {
  const [number, setNumber]=useState(0)
  const [result, setResult]=useState("")

  function getNumber(e){
    setNumber(Number(e.target.value))
  }

  function defaultValue(){
    if(number===0){
      setNumber("")
    }
  }

  function resetValue(){
    setNumber(0)
    setResult("")
  }

  function checkNumber(){
    if(number>0){
      setResult("Positive")
    }
    else{
      setResult("Negative")
    }
  }

  return (
    <div>
      <h1>negative or positive checker</h1>
      Enter a number : <input type="number" value={number} onChange={getNumber} onFocus={defaultValue}/> <br /><br />
      Result: <h2>{result}</h2> <br /><br />
      <button onClick={checkNumber}>Check</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  )
}

export default PositiveAndNegetiveCheckerApp
