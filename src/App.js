import React from 'react';
import "./App.css";
import RoutesComponent from './Component/RoutesComponent/RoutesComponent';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';
import Error404 from './Component/Error404/Error404';

function App(){
  return(
    <div>
       <RoutesComponent/>
    </div>
  )
}

export default App;