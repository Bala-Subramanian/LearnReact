import React from 'react';
import "./App.css";
import RoutesComponent from './Component/RoutesComponent/RoutesComponent';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';

function App(){
  return(
    <div>
      {/* <Navbar/> */}
      <BrowserRouter>
      <Routes> 
        <Route exact path="/" Component = {Home} />
        <Route path="/home"   Component = {Home} />
        <Route path="/about"  Component = {About} />
        <Route path="/contact" Component = {Contact} />
        </Routes>
      </BrowserRouter>
        
        {/* <Route exact path="/" element = {<Navbar/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route> */}
        
      {/* <RoutesComponent></RoutesComponent> */}
    </div>
  )
}

export default App;