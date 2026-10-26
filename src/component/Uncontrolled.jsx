
import React, {useRef} from 'react'

export default function Uncontrolled() {
const nameref=useRef();
const emailref=useRef();
const submit=(e)=>{
    e.preventDefault();
    console.log("from submits")
    console.log(nameref.current.value);
    console.log(emailref.current.value);
    
}

  return (
    <div>
        <form onSubmit={submit}>
            <input placeholder='name' ref={nameref} />
            <br/>
            <br />
              <input placeholder='email' ref={emailref} />
            <br/>
            <br />
             <button>Submits</button>

        </form>
    </div>
  )
}
