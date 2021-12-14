import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import MyOrder from "./Components/MyOrder";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Logout from "./Components/Logout";

const App = () => {
  return (
    <>
      
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>

          <Route path="/MyOrder" element={<><Navbar/> <MyOrder/></>}>
          </Route>


          <Route path="/Signup" element={<Signup/>}>
          </Route>

          <Route path="/Logout" element={<Logout/>}>
          </Route>

          <Route path="/Home" element={<><Navbar/> <Home/></>}>
          </Route>

        </Routes>
    </>
  )
}

export default App;
