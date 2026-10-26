import React, { useState } from 'react'

export default function Controlled() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const submit = (e) => {
        e.preventDefault()
        console.log(name, email, phone);
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input onChange={(e) => setName(e.target.value)} placeholder='Name'/><br/><br/>
                <input onChange={(e) => setEmail(e.target.value)} placeholder='Email'/><br/><br/>
                <input onChange={(e) => setPhone(e.target.value)} placeholder='Phone'/><br/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}