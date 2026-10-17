import React from 'react'

export default function Onclick(){

const click=()=>{
  console.log("hello from onclick");
}
  return (
    <div>
      <button onClick={click}>Click me</button>
    </div>
  )
}
