import './auth.css';
import { Link, useNavigate } from "react-router-dom";
 import { useState } from 'react';
 import { useAuth } from '../../contexts';
 import { loginFunc } from '../../utilities';
 
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const [ loginError, setLoginError ] = useState("")

    const testLogin = {
       email: "guest@gmail.com",
       password: "guest1234", 
    };
    const loginSubmitHandler = async (user) => {
        try {
            const { encodedToken, foundUser:{...userDetails} } = await loginFunc(user);
            if (encodedToken) {
              localStorage.setItem("AUTH_TOKEN", JSON.stringify(encodedToken));
              localStorage.setItem("username", JSON.stringify(userDetails));
              setAuth ({
                isAuth: true,
                token: encodedToken,
                user: {...userDetails},
              }); 
              navigate("/") ;
            } else {
                throw new Error("Login failed! Check your filled details.");

            } 
        } catch (error) {
            setLoginError(error.message)
        }
        };
        const testLoginHandler = async (user) => {
            setUser(testLogin);
            loginSubmitHandler(user);
    }
    return (
        <div>
           <main className="container">
        <div className="login-form">
            <div className="login-title">
                <h2 className="heading text-center">Login</h2>
            </div>
            
            <div className="input">
                <label htmlFor='email'>Email</label>
                <input 
                type="email"
                className="input-txt" 
                placeholder="Enter your email here"
                required
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                />
            </div>
            <div className="input">
                <label htmlFor='password'>Password</label>
                <input 
                className="input-txt" 
                type="password"
                placeholder="Enter password" 
                required
                maxLength="20"
                minLength="6"
                value={user.password}
                onChange={(e) => setUser({ ...user, password:e.target.value})}
                />
                </div>
            <div className="input">
        <Link to="./Put route forget  password" className="login-forget">Forget your Password?</Link>
       </div>
        <div className="btn-signup text-center">
        <button type="submit" className="btn btn-primary"
         onSubmit={(e) => {
            e.preventDefault();
            loginSubmitHandler(user);
          }}>Login</button>
            </div>
            <div className="btn-signup text-center">
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={(e) => {
            e.preventDefault();
            testLoginHandler(testLogin)
        }}
        > Login as Guest
        </button>
        </div>
            {loginError !== "" && <p className="pswrd-match">{loginError}</p>}
             <div className="text-center">
               <span>Create New Account 
                <Link to='/signup' className="login-link fw-400" >Signup</Link>
                </span>
            </div>
           
        </div>
    </main>
    
    </div>
     )
} 
export { Login }