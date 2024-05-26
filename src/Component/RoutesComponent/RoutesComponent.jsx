import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Error404 from "../Error404/Error404";

function RoutesComponent(){
  console.log("Inside RoutesComponent")
  return (
  <div>
    <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route exact path="/" Component = {Home} />
        <Route path="/home"   Component = {Home} />
        <Route path="/about"  Component = {About} />
        <Route path="/contact" Component = {Contact} />
        <Route path="/blog/:postId" Component={Blog} />
        <Route path="*" Component = {Error404} /> // Handles the unknown URL's
      </Routes>
    </BrowserRouter>
  </div>
)}
export default RoutesComponent;