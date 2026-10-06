import React, { useState } from "react";

export default function Task() {

  const [color, setColor] = useState("white");
  const [border, setBorder] = useState("");

  return (
    <div>

      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: color,
          border: border
        }}
      >
      </div>

      <button onClick={() => { setColor("red") }}>red</button>

      <button onClick={() => { setColor("green") }}>green</button>

      <button onClick={() => { setColor("blue") }}>blue</button>

    <button onClick={() => { setColor("yellow") }}>yellow</button>

    <button onClick={() => { setColor("white") }}>Reset color</button>

    


      

    </div>
  );
}