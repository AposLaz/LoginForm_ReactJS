import React from "react";
import {useNavigate} from "react-router-dom"

const Dashboard = ()=>{
    
    let navigate = useNavigate()
    
    const handleLogout = () =>{
        navigate('/login')
    }

    return (
        <div>
            Welcome to Home Page! <br /><br />
            <input 
              type="button"
              value="logout"
              onClick={handleLogout}
            />
        </div>
    )
}

export default Dashboard;