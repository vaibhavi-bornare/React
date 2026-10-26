import React from 'react'
export default function Onkey(){
    const demo =(e)=>{
console.log(`key pressed : ${e.key}`);
    }
    return(
       <div>
        Onkey
        <input onKeyDown
    ={demo}/>
       </div>
    )
}