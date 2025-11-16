import React from 'react'

const GreetingProps = ({name}) => {
  function greets(){
    alert("Hello..."+name)
  }
  return (
    <div>
      <button onClick={greets}>greet</button>
    </div>
  )
}

export default GreetingProps
