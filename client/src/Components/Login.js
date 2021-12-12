import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email, password
            })
        });

        const data = res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials!");
            console.log("Invalid Credentials!")
        } else {
            window.alert("Login Successful");
            console.log("Login Successful")

            history('/Home');
        }
    }

    return (
        <>
            <div className="App my-5">
            <h2>Login Page</h2>
            <div>
            <form method="POST">
            <label>Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.."
             value={email} onChange={(e) => setEmail(e.target.value)}/>
        
        
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="Your password"
             value={password} onChange={(e) => setPassword(e.target.value)} />
        
            <input type="submit" value="Submit" value="Login" onClick={loginUser} />
            </form>
            <h5>New User? <NavLink to="/Signup"><span className="text-primary"> Register here </span></NavLink></h5>
            </div>
            </div>
        </>
    )
}

export default Login;