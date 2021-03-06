import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand text-primary" to="/home">My Amazon</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/profile">Profile</NavLink>
                </li> */}
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/myorder">MyOrder</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Logout">SignOut</NavLink>
                </li>
            </ul>
            
            </div>
        </div>
    </nav>
    </>
    );
}

export default Navbar;