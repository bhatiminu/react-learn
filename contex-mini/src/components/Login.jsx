import React, {useContext,useState} from "react";
import UserContext from "../contex/UserContext";

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
    return (
        <div>
            <h2>login</h2>
            <input 
            type="text" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username" />
            <input 
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login