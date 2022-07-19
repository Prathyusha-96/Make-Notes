import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import { useAuth, useNote } from "../../contexts";
 const Navbar = () => {
    const { auth, setAuth } = useAuth();
    const { noteState, noteDispatch} = useNote();

    const redirect = useNavigate();
    const signOutFunc = (setAuth) => {
        localStorage.removeItem("AUTH_TOKEN");
        localStorage.removeItem("username");
        setAuth(() => ({
          isAuth: false,
          token: null,
          user: {},
        }));
        noteDispatch({ type: "RESET_NOTES"})
        redirect("/login");
      };
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
   {auth.isAuth === true ? (
    <>
    <li>
    <Link  to="/addnote" className="text">
    Add Note
 </Link>
 </li>
        <li>
        <Link to="/login" className="btn btn-primary"
        onClick={() => signOutFunc(setAuth)}>
            Logout
        </Link>
        </li>
        </>
      ) : (
        <li>
    <Link  to="/login" className="btn btn-primary">
    Login
 </Link>
 </li>
 )}
</ul>
</nav>
    );
}
export { Navbar }