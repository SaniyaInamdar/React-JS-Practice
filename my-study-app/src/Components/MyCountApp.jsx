import React, { useState } from 'react'

const MyInputApp = () => {

 let [count,setCount]=useState(0)

  function increament(){
   setCount( count + 1)
  }

  function decreament(){
    setCount( count - 1)
  }

   function reset(){
    setCount(count=0)
  }

  function givenvalue(e){
    setCount(Number(e.target.value));
  }

  return (
    <div>
      <h1>My Count App</h1>
      Count : <input type="number" onChange={givenvalue} value={count}/>
      <button onClick={increament}>increament</button>
      <button onClick={decreament}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default MyInputApp
