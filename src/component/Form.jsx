import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");

    console.log("data from name", name)

    return (
        <div>

            <div style={{height:"300px",width:"200px",border:"2px solid black",}}></div>
                <input onChange={(e) => { setName(e.target.value) }} />
                
                </div>
    )
}
