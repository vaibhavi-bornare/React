import React, { useReducer, useState } from "react";

export default function Usereducer() {
    const reducer = (state, action) => {return action}
       
    };

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <button onClick={() => { dispatch(state - 1); }}>-</button>

            <span>{state}</span>

            <button onClick={() => { dispatch(state + 1); }}>+</button>
        </div>
    );
