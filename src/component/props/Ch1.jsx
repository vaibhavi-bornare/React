import React from 'react'
import Ch2 from "./Ch2.jsx";
export default function Ch1(props){
    console.log("hello from first ch1",props);
    return(
        <div>
        Ch1
        <Ch2 data={props.data}/>
        </div>
    )
}