import React, { useState } from "react";


export default function OnSubmit() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [age,setage] =useState("");

    const submit=(e)=>{
    e.preventDefault()
  console.log(firstname,lastname,email,phone,age);
    }

  return(
    <div>
        <form onSubmit={submit}>

        <input type="text" onChange={(e)=>setfirstname(e.target.value)}/><br></br><br></br>
        <input type="text" onChange={(e)=>setlastname(e.target.value)}/><br></br>
        <input type="email" onChange={(e)=>setemail(e.target.value)}/><br></br>
        <input type="tel" onChange={(e)=>setphone(e.target.value)}/><br></br>
        <input type="number" onChange={(e)=>setage(e.target.value)}/><br></br>
        <button>submit</button>
        </form>
    </div>
  )
}