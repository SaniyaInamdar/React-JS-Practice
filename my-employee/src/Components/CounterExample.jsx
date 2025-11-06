import { useState } from "react"

function CounterExample(){

  // var NormalCounter=0
  // var StateCounter=0

  const [NormalCounter, setNormalCounter]=useState(0)
  const [StateCounter, setStateCounter]=useState(0)

  const HandleNormal=()=>{
    setNormalCounter(NormalCounter+1)
    console.log("Normal button clicked..."+NormalCounter)
  }

   const HandleState=()=>{
   setStateCounter(StateCounter+1)
    console.log("State button clicked..."+StateCounter)
  }

  return(
  <>
  <h4>Normal Count : {NormalCounter}</h4>
  <button onClick={HandleNormal}>Normal Counter</button>
  <br /><br />
  <h4>State Count : {StateCounter}</h4>
  <button onClick={HandleState}>State Counter</button>
  </>
  )
}
export default CounterExample