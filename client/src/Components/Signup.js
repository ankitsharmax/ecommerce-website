import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {

    const history = useNavigate();
    const [user,setUser] = useState({
        name:"", email:"",password:"",cpassword:""
    });

    let name,value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        // ... spread operator
        setUser({...user, [name]:value});
    }


    // Send data to backend api
    const PostData = async (e) => {
        e.preventDefault();
        const {name, email, phone, password, cpassword} = user;
        
        const res = await fetch("/register", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name, email, phone, password, cpassword
            })
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Registration Failed");
            console.log("Registration Failed");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");

            history("/");
        }
    }


    return (
        <>
            <div className="App my-5">
            <h2>Signup Page</h2>
            <div>
            <form method="POST">
            <label>Name</label>
            <input type="text" id="name" name="name" value={user.name} onChange={handleInputs}
             placeholder="Your name.." />

            <label>Email</label>
            <input type="text" id="email" name="email" value={user.email}onChange={handleInputs}
             placeholder="Your email.."/>

            <label>Phone</label>
            <input type="text" id="phone" name="phone" value={user.phone}onChange={handleInputs}
             placeholder="Your phone.."/>
        
        
            <label>Password</label>
            <input type="password" id="password" name="password" value={user.password} onChange={handleInputs}
             placeholder="Your password" />
        
        
            <label>Confirm Password</label>
            <input type="password" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInputs}
             placeholder="Comfirm password" />

            <input type="submit"  value="Submit" value="register" onClick={PostData} />
            </form>
            <h5>Already Registered? <NavLink to="/"><span className="text-primary"> Login here </span></NavLink></h5>
            </div>
            </div>
        </>
    )
}

export default Signup;