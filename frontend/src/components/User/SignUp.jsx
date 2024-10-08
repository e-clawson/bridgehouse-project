import React from "react";
import { useState, useContext } from "react";
import {auth} from "../../config"
import {createUserWithEmailAndPassword} from "firebase/auth"

export default function SignUp(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSignUp = async (e) => {
        e.preventDefault()
        console.log("submit", email, password)

        let response = await createUserWithEmailAndPassword(auth,email,password)
        console.log(response)
    }  

    return(
        <div>
            <h3>Admin - Create a New Website Editor </h3>
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
}