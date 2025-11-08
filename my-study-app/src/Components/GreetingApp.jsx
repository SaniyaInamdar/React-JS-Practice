import React, { useState } from 'react'

const GreetingApp = () => {
  const [yourname,setYourname]=useState("Enter your name..")

  function defaultValue(){
    setYourname("")
  }

  function useName(e){
    setYourname(e.target.value)
  }

  function greetYourself(){
    alert("Hello..."+yourname)
  }

  function resetValue(){
    setYourname("")
  }

  return (
    <div>
      <h1>Greet Yourself</h1>
      Enter your name : <input type="text" onChange={useName} onFocus={defaultValue}  value={yourname}/> <br /><br />
      <button onClick={greetYourself}>Greet</button>
      <button onClick={resetValue}>Reset</button>
    </div>
  )
}

export default GreetingApp
