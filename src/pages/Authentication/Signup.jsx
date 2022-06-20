import './auth.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from "../../contexts";
import { signupFunc } from '../../utilities';

const Signup = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const redirect = useNavigate();
    const { setAuth } = useAuth();
    const [ signupError, setSignupError] = useState("");

    const signupSubmitHandler = async (user) => {
        const { encodedToken, createdUser } = await signupFunc(user);
        try {
            if (encodedToken) {
              localStorage.setItem("AUTH_TOKEN", JSON.stringify(encodedToken));
              localStorage.setItem("username", JSON.stringify(createdUser.firstName));
              setAuth({
                isAuth: true,
                token: encodedToken,
                user: createdUser.firstName,
              });
              redirect("/");
            
            } 
            else {
              throw new Error("Signup failed");
            }
          } catch (error) {
            setSignupError(error.message);
          }
            
        };  

    return(
        <div>
         <main className="container">
        <div className="signup-form">
            <div className="signup-title">
                <h2 className="heading text-center">Signup</h2>
            </div>
            <form
        className="flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          signupSubmitHandler(user);
        }}
      >
     <div className="input">
        <label htmlFor="firstname">
            First Name</label>
                <input
                id="firstname"
                 className="input-txt" 
                 type="text"
                 placeholder="Enter your first name" 
                 required
                 value={user.firstName}
                 onChange={(e) => setUser({ ...user, firstName: e.target.value})}
                 />
            </div>
            <div className="input">
            <label htmlFor="lastname">
            Last Name</label>
                <input
                id="lasttname"
                 className="input-txt" 
                 type="text"
                 placeholder="Enter your last name" 
                 required
                 value={user.lastName}
                 onChange={(e) => setUser({ ...user, lastName: e.target.value})}
                 />
            </div>
            <div className="input">
            <label htmlFor="email">
            Email address
          </label>
          <input
            id="email-id"
            type="email"
            className="input-txt"
            placeholder="Enter your email here"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            </div>
        <div className="input">
            <label htmlFor="password" className="input-label input-required ">
            Password
          </label>
          <input
            type="password"
            className="input-txt"
            placeholder="Enter password"
            required
            maxLength="20"
            minLength="6"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            </div>
            <div className="input">
            <label htmlFor="password" className="input-label input-required ">
           Confirm Password
          </label>
          <input
            type="password"
            className="input-txt"
            placeholder="Enter password"
            required
            maxLength="20"
            minLength="6"
            value={user.confirmPassword}
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
            />
            </div>
            {user.password !== user.confirmPassword && (
          <p className="my-5 pswrd-match">Passwords don't match</p>
        )}
            <div className="btn-signup text-center">
                <button className="btn btn-primary"
                 disabled={user.password !== user.confirmPassword}
                 >Sign Up
                 </button>
                  {signupError !== "" && <p className="pswrd-match">{signupError}</p>} 
                </div>
            <div className="text-center">
            <span>Allready have an Account  <Link to="/login" className="login-link fw-400">Login</Link></span>
            </div>
            </form>
        </div>
    </main> 
   
    </div>
    )
} 
export { Signup }