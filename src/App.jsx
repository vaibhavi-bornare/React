
import './App.css'
// import Jsx from './component/Jsx';
// import Demo from "./component/Demo.jsx";
// import Classcom from "./component/Class.jsx";
// import Lyf from "./component/Lyf.jsx";
// import Usestate from './component/Usestate.jsx';
// import Task from './component/Task.jsx';
// import Form from './component/Form.jsx';
import Ch1 from './component/props/Ch1.jsx';
//  import Onchange from './component/Event/Onchange.jsx';
//  import Onmouse from './component/Event/Onmouse.jsx';
// import Onkey from './component/Event/Onkey.jsx';
// import Form from '.component/Event/Form.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Navbar from './component/Navbar.jsx';
import AnaimlsName from './Pages/AnaimlsName.jsx';


function App() {


  return (
  
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog/:id" element={<Blog/>}/>
          <Route path="/AnimalsName" element={<AnaimlsName/>}/>
        </Routes>
      </BrowserRouter>
    </div>

 
  )
}

export default App;