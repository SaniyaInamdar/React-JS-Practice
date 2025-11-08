import React, { useState } from 'react'

const AgeEligibilityCheckerApp = () => {

  const [age, setAge]= useState(0)

  function defaultValue(){
    if(age===0){
      setAge("")
    }
  }

  function getAge(e){
    setAge(Number(e.target.value))
  }

  function ageChecker(){
    if(age>=18){
      alert("You are eligible..")
    }
    else{
      alert("You are not eligible..")
    }
  }

  function resetValue(){
    setAge(0)
  }
  return (
    <div>
      <h1>Age Eligibility Checker</h1>
      Enter Your age : <input type="number" onFocus={defaultValue} value={age} onChange={getAge}/><br /><br />
      <button onClick={ageChecker}>Check</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  )
}

export default AgeEligibilityCheckerApp
