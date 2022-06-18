import './auth.css';
import { Link } from "react-router-dom";
 const Login = () => {
    return (
        
        <div>
           <main className="container">
        <div className="login-form">
            <div className="login-title">
                <h2 className="heading text-center">Login</h2>
            </div>
            <div className="input">
                <label htmlFor='email'>Email</label>
                <input className="input-txt" type="email" />
            </div>
            <div className="input">
                <label htmlFor='password'>Password</label>
                <input className="input-txt" type="password" />
            </div>
            <div className="input">
                <label type="checkbox" className="input-checkbox">Remember me</label>
                <a href="#" className="login-forget">Forget your Password?</a>
            </div>

            <div className="btn-signup text-center">
                <button className="btn btn-primary">Login</button>
            </div>
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