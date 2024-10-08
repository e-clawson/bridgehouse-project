import React from "react";
import { useState, useContext } from "react";
import {auth} from "../../config"

export default function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = async (e) => {
        e.preventDefault()
        console.log("submit", email, password)
    }  

    return(
        <div>
            <h3>Admin Login Form: </h3>
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