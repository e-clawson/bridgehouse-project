import React from "react";
import { useState, useContext } from "react";
import {auth} from "../../config"
import {createUserWithEmailAndPassword} from "firebase/auth"

export default function SignUp(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [loading, setLoading] = useState(null)
    
    const handleSignUp = async (e) => {
        e.preventDefault()
        console.log("submit", email, password)
        setError(null)
        setLoading(true)
        try{ 
            let response = await createUserWithEmailAndPassword(auth,email,password)
            console.log(response)
            setError(null)
            setSuccess("New User Created")
        } catch (error) {
            console.log(error.code)
            setError(error.code)
        }
        setLoading(false)
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
                    {loading === true ? "Loading..." : <button>Sign Up</button>}
                </div>
                <div>
                    <h5>{error}</h5>
                    <h5>{success}</h5>
                </div>
            </form>
        </div>
    )
}