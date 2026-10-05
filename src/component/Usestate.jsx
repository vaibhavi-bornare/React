import React,{useState} from 'react'
export default function Usestate(){
    const[name,setName]=useState("");
    const[color,setColor]=useState("black");
    const[border,setBorder]=useState();

return(
    <div>
    <p style={{border:border}}>{name}</p>
    <button onClick={()=>{setName("sachin")}}>change name</button>
  <button onClick={()=>{setColor('blue')}}>change color</button>
  <button onClick={()=>{setBorder("2px solid black")}}>change border</button>
    
    </div>
)






}