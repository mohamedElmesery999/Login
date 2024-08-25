import React from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () =>{

    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser  className="icon"/>
                    
                </div>
                
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon"/>
                </div>

                <div className="reemembr-forget">
                    <label><input type="checkbox"/> Remember me</label>
                    <a href="#">Forgot Password ?</a>
                </div>

                <button type="submit">Login</button>
                <p>Don't have an account?</p>

            </form>
        </div>
    )
}
export default LoginForm