import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import { useAuth } from "../../contexts";
 const Navbar = () => {
    const { auth, setAuth } = useAuth();
    const redirect = useNavigate();
    const signOutFunc = (setAuth) => {
        localStorage.removeItem("AUTH_TOKEN");
        localStorage.removeItem("username");
        setAuth(() => ({
          isAuth: false,
          token: null,
          user: "",
        }));
        redirect("/login");
      };

      const themeFromLocal = JSON.parse(localStorage.getItem("darkMode"));
      const [darkMode, setDarkMode] = useState(themeFromLocal || false);
      useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        darkMode
          ? document.body.classList.add("dark-mode")
          : document.body.classList.remove("dark-mode");
      }, [darkMode]);
    
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
    <Link  to="/addnote" className="text">
    Add Note
 </Link>
 </li>
       {auth.isAuth === true ? (
        <li>
        <Link to="/login" className="btn btn-primary"
        onClick={() => signOutFunc(setAuth)}>
            Logout
        </Link>
        </li>
      ) : (
        <li>
    <Link  to="/login" className="btn btn-primary">
    Login
 </Link>
 </li>
)}
<li>
{darkMode ? (
  <i className="fas fa-sun" 
  onClick={() => setDarkMode(false)}></i>
  ) : (
  <i className="fas fa-moon cursor-pointer"
  onClick={() => setDarkMode(true)}></i>
)} 
</li>
</ul>
</nav>
    );
}
export { Navbar }