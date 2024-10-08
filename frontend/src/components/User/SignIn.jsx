import React from "react";
import { useState, useContext } from "react";

export default function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("submit")
    }



    return(
        <div>
            <h3>Admin Login Form</h3>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </form>
        </div>
    )
}