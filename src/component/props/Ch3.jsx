import React from 'react'
import { useContext } from 'react';
import { UseContext } from '../UseContext';
export default function Ch3(){
    const data=useContext(UseContext);
 
    console.log("data from ch3",data);
    return(
        <div>
      <h1>Ch3</h1>       
        </div>
    )
}