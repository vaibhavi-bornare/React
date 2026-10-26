import React ,{useState} from 'react'

const Counter=()=>{
    const[state,setState]=useState(0);
    return(
        <div>
            <button onClick={()=>{setState(state-1)}}>-</button>
            <span>{state}</span>
             <button onClick={()=>{setState(state+1)}}>+

             </button>

        </div>
    )
}


export default function Hoc() {
  return (
    <div>
        <Counter/>
    </div>
  )
}
