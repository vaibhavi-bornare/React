import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  var Navigate=useNavigate();
  const postBlog=()=>{
    setTimeout(()=>{
      console.log("post blog");
      Navigate("/about?name=Vaibhavi&age=22");
    },5000);
  };
  return (
    <div>Home
      <button onClick={postBlog}> post blog</button>

    </div>
  )
}
