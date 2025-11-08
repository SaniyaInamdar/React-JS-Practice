import React, { useState } from 'react'

const NameLengthChecker = () => {

  const[yourname,setYourname]=useState("Enter Your Name ")

  function setDefault(){
    setYourname("")
  }

  function getName(e){
    setYourname(e.target.value)
  }

  function resetValue(){
    setYourname("Enter Your Name ")
  }

  function lengthFinder(){
    
    alert("Length of "+yourname+" is : "+yourname.length)
  }
  return (
    <div>
      <h1>Check Your Name Length</h1>
      Enter Your Name : <input type="text" value={yourname}  onChange={getName} onFocus={setDefault} /><br /><br />
      <button onClick={lengthFinder}>Find Length</button>
      <button onClick={resetValue}>reset</button>

    </div>
  )
}

export default NameLengthChecker
