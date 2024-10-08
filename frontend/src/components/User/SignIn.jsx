import React from "react";
import { useState, useContext } from "react";
import {auth} from "../../config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(null)
    
    const handleLogin = async (e) => {
        e.preventDefault()
        console.log("submit", email, password)
        setError(null)
        setLoading(true)
        try {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setSuccess("SignIn Successful")
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        });
        } catch (error){
            console.log(error.code)
            setError(error.code)
        }
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
                    {loading === true ? "Loading..." : <button>Log In</button>}
                </div>
                <div>
                    <h5>{error}</h5>
                    <h5>{success}</h5>
                </div>
            </form>
        </div>
    )
}