import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import Home from "./Home"

const Login = () => {
  const navigate=useNavigate()
  let {isAuth,setisAuth}=useContext(AuthContext)
  return (
    <div>
      Login Form:
      <br/>
      <input data-cy="login-email" name="email" placeholder="Enter your Email" />
       <br/>
      <input data-cy="login-password" type="password" placeholder="Enter Your password" />
      <br/>
      <button data-cy="login-submit" onClick={()=>{
        setisAuth(true);
        // Navigate("/")
      }}>Login</button>
    </div>
  );
};

export default Login;
