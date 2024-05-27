import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";

function RoutesComponent(){
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </BrowserRouter>  
}
export default RoutesComponent;