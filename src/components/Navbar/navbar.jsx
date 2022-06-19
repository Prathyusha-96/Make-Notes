import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
export const Navbar = () => {
    return(
   <nav>
    <div className="left-nav">
        <Link to="/">
            Make-Notes
        </Link>
     </div>
     <ul className="navbar-search">
    <input className="search-box" type="search" placeholder="Search" /><span className="search-icon">
   <i className="fas fa-search" aria-hidden="true"></i></span>
  </ul>
    <ul className="right-nav">
    <li>
    <Link  to="/" className="text">
    Home
 </Link>
 </li>
 <li>
    <Link  to="/" className="text">
    Add Note
 </Link>
 </li>
        <li>
    <Link  to="/Login" className="btn btn-primary">
    Login
 </Link>
 </li>
</ul>
</nav>
    );
}