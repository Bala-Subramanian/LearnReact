import React from "react";
import "./Navbar.css";
import { Link, Outlet, useLocation } from "react-router-dom";

function Navbar({ isAuthenticated, username }){
    let screenName = "Login";
    let isLoginpage  = true;
    const location = useLocation();
    if (location.pathname.startsWith('/blog/')) {
        screenName = 'Blog Post';
        isLoginpage  = false;
    } else if (location.pathname.startsWith('/profile/')) {
        screenName = 'User Profile';
        isLoginpage  = false;
    } else if (location.pathname === '/about') {
        screenName = 'About Us';
        isLoginpage  = false;
    } else if (location.pathname === '/contact') {
        screenName = 'Contact Us';
        isLoginpage  = false;
    }else if (location.pathname === '/login') {
        screenName = 'Login';
        isLoginpage  = true;
    }else if (location.pathname.startsWith('/home/')) {
        screenName = 'Home';
        isLoginpage  = false;
    }else{
        screenName = 'Home';
        isLoginpage  = false;
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
            {!isLoginpage &&<Link to="/home/:username">Home</Link>}
            {!isLoginpage &&<Link to="/about">About</Link>}
            {!isLoginpage &&<Link to="/contact">Contact</Link>}
            {!isLoginpage &&<Link to="/blog/1">Blog Post 1</Link>}
            {!isLoginpage &&<Link to="/blog/2">Blog Post 2</Link>}
            {isAuthenticated  &&<Link to="/profile/:username">User Profile</Link>}
            {!isLoginpage && 
                <Link style={ {backgroundColor:"red", color:"#fff", padding:"4px" }} to="/login">Logout</Link>
            }
            {!isLoginpage && <Link to="/"></Link>}
        </div>
        {/* <Outlet/> */}
    </div>
    )
}
export default Navbar;
