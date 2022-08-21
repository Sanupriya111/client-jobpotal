import React from 'react'
import './Login.css'
import {Link} from  "react-router-dom";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import {useEffect} from "react";

function Login() {
    const [login,setLogin]=useState({
        Username:'',
        Password:''
    });
    const navigate = useNavigate();
    const handleLogin=(e)=>{
        
        e.preventDefault();
        //console.log(" please login",login);
        const params={
            Username:login.Username,
            Password:login.Password
        }
        const headers={
            'Content-Type':'application/json',
            
          }
        axios.post('http://localhost:3400/login',//api call-to connect backend router
        params,headers).then((res)=>{console.log(res)
        if(res.data.details==='success') alert('sucsses')
        console.log('login token',res.data.token);
        localStorage.setItem("userauthentication",JSON.stringify(res.data.token))
    })
        navigate('/home')
    }

       
    return (
    
        <div class="form-bg main ">
    <div class="container form">
        <div class="row">
            <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                <div class="form-container">
                    <form class="form-horizontal" onSubmit={handleLogin} method='POST'>
                        <h3 class="title">Login Here</h3>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input class="form-control"  placeholder="Username"onChange={(e)=>{
           setLogin({...login,Username:e.target.value})}}  name='Username'/>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                            <input class="form-control" type="password" placeholder="Password" name="Password"  onChange={(e)=>{
           setLogin({...login,Password:e.target.value})}}/>
                        </div>
                        <button type='submit' class="btn signin">Log in</button>
                        <span class="forgot-pass"><a href="#">Forgot password?</a></span>
                        <span class="register"><Link to="/register">Register / Signup</Link></span>
                    </form>
                    
                </div>
            </div>
        </div>
       
    </div>
    <div>

    </div>
    </div>

        
  )
}

export default Login