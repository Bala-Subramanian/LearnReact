import React from "react";
import "./Navbar.css";
import { Link, Outlet, useLocation } from "react-router-dom";

function Navbar(){
    let screenName = "Home";
    const location = useLocation();
    if (location.pathname.startsWith('/blog/')) {
        screenName = 'Blog Post';
    } else if (location.pathname === '/about') {
        screenName = 'About Us';
    } else if (location.pathname === '/contact') {
        screenName = 'Contact Us';
    }else{
        screenName = 'Home';
    }
    return(
    <div className="navbar">
        <div>
            <div className="navbar-heading">MY APP</div>
            <div className="navbar-subheading">
                React training application.<b> {screenName} Screen</b>
            </div>
        </div>
        
        <div className="navbar-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog/1">Blog Post 1</Link>
            <Link to="/blog/2">Blog Post 2</Link>
            <Link to="/"></Link>
        </div>
        {/* <Outlet/> */}
    </div>
    )
}
export default Navbar;
