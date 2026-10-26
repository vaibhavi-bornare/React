
import './App.css'
// import Jsx from './component/Jsx';
// import Demo from "./component/Demo.jsx";
// import Classcom from "./component/Class.jsx";
// import Lyf from "./component/Lyf.jsx";
// import Usestate from './component/Usestate.jsx';
// import Task from './component/Task.jsx';
// import Form from './component/Form.jsx';
// import Ch1 from './component/props/Ch1.jsx';
 import Onchange from './component/Event/Onchange.jsx';
 import Onsubmit from './component/Event/OnSubmit.jsx';
import Onmouse from './component/Event/Onmouse.jsx';
import Onkey from './component/Event/Onkey.jsx';
// import Form from '.component/Event/Form.jsx';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Onclick from './component/Event/Onclick.jsx';
// import { Suspense } from 'react';
// import Contact from "./Pages/Contact.jsx";
// import Home from "./Pages/Home.jsx";
// import About from "./Pages/About.jsx";
// import Blog from "./Pages/Blog.jsx";
// import AnaimlsName from './Pages/AnaimlsName.jsx';
// import { UseContext } from './component/UseContext.jsx';
import { Component } from 'react';
// import { lazy, Suspense } from 'react';
// const Lazy=lazy(()=>import("./component/Lazy"));
import Usememo from './component/Usememo.jsx';
// import Uncontrolled from './component/Uncontrolled.jsx';
// import Controlled from './component/Controlled.jsx';
import Hoc from './component/HOC/Hoc.jsx';

function App() {


  // const Student={
  //   name:"vaibhavi",
  //   Age:19,
  //   college:"ABC collge"
  // }
  return (
   
  
    <div>
      {/* <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
          <Route path="/AnimalsName" element={<AnaimlsName/>}/>
        </Routes>
      </BrowserRouter> */}
 {/* <UseContext provider value={{Student}}> */}
{/* <Ch1/> */}
 {/* </UseContext> */}
 {/* <Onclick/> */}
 {/* <Onchange/> */}
 {/* <Onsubmit/> */}
 {/* <Onmouse/> */}
 {/* <Onkey/> */}
 {/* <Suspense fallback={<p>Loading...</p>}>
<Lazy/>
 </Suspense> */}
{/* <Controlled/> */}
{/* <Uncontrolled/> */}
<Hoc/>
    </div>

 
  )
}

export default App;