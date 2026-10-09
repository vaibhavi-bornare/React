import React from 'react'
export default function Ch1(props){
    console.log("hello from ch3",props)
    return(
        <div>
        Ch3
        <h3 style={{color:props.data.color}}>{props.data.data}</h3>
        </div>
    )
}