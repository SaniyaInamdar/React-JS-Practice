import React, { useState } from 'react'

const MyCounterApp = () => {

  var [count,setCount]=useState(0)

  function increament(){
   setCount(count=count +1)
  }

  function decreament(){
    setCount(count=count-1)
  }

   function reset(){
    setCount(count = 0)
  }

  return (
    <div>
      <h1>My Counter App</h1>
      <h4>{count}</h4>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default MyCounterApp
