import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Login = (props) =>{
    
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    //error messages for invalid password
    const [errorPwd,setErrorPwd] = useState(null)
    //error fro invalid username
    const [errorUsr,setErrorUsr] = useState(null)
    //loading login
    const [loading,setLoading] = useState(false)
    
    let navigate = useNavigate();
    const handleLogin = () =>{
        
        axios.post(URL,{
            username: username,
            password: password
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })

        //navigate('/dashboard')
    } 

    return (
        <div>
            Welcome to the Login Page! <br /><br />
            <div>
                <input type="text" 
                       placeholder="Username" 
                       value={username} 
                       onChange={ e => setUsername(e.target.value)}
                />
            </div>
            {errorUsr && <div className="error">{errorUsr}</div>}
            <div>
                <input type="password" 
                       placeholder="Password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
            </div>
            
            {errorPwd && <div className="error">{errorPwd}</div>}

            <input type="button" 
                   value={loading ? "Loading...": "Login"}
                   disabled={loading}
                   onClick={handleLogin}
            />
        </div>
    )
}

export default Login;