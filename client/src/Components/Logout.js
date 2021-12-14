import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    sessionStorage.clear();

    const history = useNavigate();
    useEffect(() => {
        fetch('/logout',{
            method: "GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials: "include"
        }).then((res) => {
            history('/',{replace:true});
            
            if (!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    });

    return (
        <>
            <h2>Logout</h2>
        </>
    )
}

export default Logout;