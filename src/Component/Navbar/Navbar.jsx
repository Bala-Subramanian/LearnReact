import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

function Navbar(){
return(
    <div>
        <h1>MY APP</h1>
        <div className="options">
            <Link className="option" to="/home">Home</Link>
            <Link className="option" to="/about">About</Link>
            <Link className="option" to="/contact">Contact</Link>
            <Link className="option" to="/"></Link>
        </div>
        {/* <Outlet/> */}
    </div>
    )
}
export default Navbar;

// return(
//     <nav>
//     <div className="topnav">
//         <a className="active" href="home">Home</a>
//         <a href="about">About</a>
//         <a href="#contact">Contact</a>
//     </div>
//     </nav>

//     )