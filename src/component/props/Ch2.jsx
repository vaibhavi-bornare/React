import React from 'react'
import Ch3 from "./Ch3.jsx";
export default function Ch1(props){
    console.log("hello from ch2",props)
    return(
        <div>
        Ch2
        <Ch3 data={props.data}/>
        </div>
    )
}