import React, { useMemo, useState } from "react";

export default function Usememo() {
  const [state, setState] = useState(true);
  const [num,setNum]=useState(5);

  const add = () => {
    console.log("hello from normal fun");
    var data = 5 + 10;
    return data;
  };
  var val = add();

 var val2= useMemo(() => {
    console.log("hello from useMemo fun");
    var data = num + 10;
    return data;
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        change value {state ? "true" : "false"}
      </button>
      <p>cal:- {val2}</p>
      <p>number:- {num}</p>
      <button onClick={()=>{setNum(10)}}>chanage number</button>
    </div>
  );
}