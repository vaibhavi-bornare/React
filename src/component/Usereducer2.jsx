import React, { useReducer } from "react";

export default function Usereducer2() {
    const reducer = (state, action) => {
        return { ...state, [action.type]: action.val };
    };

    const [state, dispatch] = useReducer(reducer, {});

    const submit = (e) => {
        e.preventDefault();
        console.log("submitted", state);
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" onChange={(e) => {
                    dispatch({ type: "name", val: e.target.value });
                }} placeholder="Name" />

                <input
                    type="text"
                    onChange={(e) => {
                        dispatch({ type: "email", val: e.target.value });
                    }}
                    placeholder="email"
                />

                <input
                    type="text"
                    onChange={(e) => {
                        dispatch({ type: "phone", val: e.target.value });
                    }}
                    placeholder="phone"
                />

                <input
                    type="text"
                    onChange={(e) => {
                        dispatch({ type: "meassage", val: e.target.value });
                    }}
                    placeholder="meassage"
                />

                <input
                    type="text"
                    onChange={(e) => {
                        dispatch({ type: "comment", val: e.target.value });
                    }}
                    placeholder="comment"
                />

                <input type="text"onChange={(e) => {dispatch({ type: "age", val: e.target.value });}}placeholder="age" />

                <input type="text"onChange={(e) => {dispatch({ type: "std", val: e.target.value })}}placeholder="std" />

                <input type="text"onChange={(e) => {dispatch({ type: "abc", val: e.target.value });}}placeholder="abc"/>

                <input type="text"onChange={(e) => {dispatch({ type: "xyz", val: e.target.value });}}placeholder="xyz"/>

                <br />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}