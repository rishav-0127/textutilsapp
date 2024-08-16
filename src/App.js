// import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
// import Home from './Home';
// import Header from "./src/mycomponents/Header";
// import {
  // BrowserRouter as Router,
  // Routes,
  // Route,

// } from "react-router-dom";


function App() {


  return (
    <>
     {/* <Router> */}
      <Navbar title="TextUtils" About="About Us"   />
    <div className='container my-3' >
  
{/* <Routes> */}
  {/* <Route path="/about" element={< About/>}> */}
    
    {/* </Route> */}
   {/* <Route path="/"element={<TextForm />}> */}
    <TextForm/>
    {/* </Route> */}
    {/* </Routes> */}
  
  </div>

 {/* </Router> */}
    </>
    );
  }

 export default App;

