import React from 'react'
export default function Onmouse(){
   const demo=()=>{
    console.log("hello from demo");
   }
    
    return(
        <div>
            <div onMouseOver={demo}>hello</div>
        </div>
    )
}