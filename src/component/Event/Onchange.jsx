import React,{useState} from 'react'
export default function Onchange(){
    const[data,setData]=useState("")
    console.log(data)



    return(
        <div>
            <input onChange={(e)=>{setData(e.target.value)}}/>
        </div>
    )
}