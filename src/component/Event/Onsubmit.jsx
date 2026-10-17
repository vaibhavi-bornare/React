import React, { useState } from 'react'

export default function Onsubmit() {
    var [firstname, setFirstname] = useState("")
    var [email, setEmail] = useState("")
    var [phone, setPhone] = useState("")

    const submit = (e) => {
              e.preventDefault()

        console.log(firstname, email, phone)
    }
    return (

        <div>
            <form onSubmit={submit}>
                <input type="text" onChange={(e) => { setFirstname(e.target.value) }} /><br></br>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} /><br></br>

                <input type="number" onChange={(e) => { setPhone(e.target.value) }} /><br></br>
                  <button>submit</button>
            </form>

        </div>
    )

}