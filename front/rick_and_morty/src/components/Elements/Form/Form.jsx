import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import validation from "./validation";

function Form(){
    const navigate = useNavigate()
    const [userData,SetUserData] = useState({
        username:"",
        password:"",
    });

    const [error,SetError] = useState({
        username:"",
        password:"",
    })

    useEffect(()=>{
        validation(userData,error,SetError);
    },[userData])

    const handleInputChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        console.log("property",property);
        console.log("value",value);
        SetUserData({...userData,[property]:value})
        validation({...userData,[property]:value},error,SetError)
    }

    const submit = (event) =>{
        event.preventDefault()
        if(validation(userData,error,SetError)){
           navigate("/")
        }
    }

    return(
        <form onSubmit={submit} >
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" onChange={handleInputChange} value={userData.username}/>
                <label htmlFor="username">{error.username}</label>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" onChange={handleInputChange} value={userData.password}/>
                <label htmlFor="username">{error.password}</label>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Form