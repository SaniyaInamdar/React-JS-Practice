import React, { useState } from 'react'
// P*R*t/100
const SimpleInterestCalculator = () => {

  const[principleAmt,setPrincipleAmt] =useState()
  const[interestRate,setInterestRate]=useState()
  const[timePeriod,setTimePeriod] =useState()

  function setDefault(){
    setPrincipleAmt("")
    setInterestRate("")
    setTimePeriod("")
  }

  function reset(){
    setPrincipleAmt("")
    setInterestRate("")
    setTimePeriod("")
  }

  function getPrincipleAmt(e){
    setPrincipleAmt(Number(e.target.value))
  }

  function getInterestRate(e){
    setInterestRate(e.target.value)
  }

  function getTimePeriod(e){
    setTimePeriod(e.target.value)
  }

  function Calculateinterest(){
    let si=(principleAmt*interestRate*timePeriod)/100
    alert("Simple Interest is : "+ si)
  }
  return (
    <div>
      <h1>Simple Interest Calculator</h1> <br /><br />
    Enter Principle Amount : <input type="number" value={principleAmt} onChange={getPrincipleAmt} /> <br /><br />
    Enter Rate of Interest : <input type="number" value={interestRate} onChange={getInterestRate}/><br /><br /> 
    Enter Time Period :  <input type="number" value={timePeriod} onChange={getTimePeriod}  /><br /><br /> 
      <button onClick={Calculateinterest}>Calculate</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default SimpleInterestCalculator
