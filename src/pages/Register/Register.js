import React from 'react'
import './Register.css'
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
function Register() {
    const [register,setRegister]=useState({
        Username:'',
        Password:'',
        Email:'',
        Roll:''
    });
    const navigate = useNavigate();
    const handleRegister=(e)=>{
        
        e.preventDefault();
const params={
  Username:register.Username,
  Email:register.Email,
  Password:register.Password,
  Roll:register.Roll

}
const headers={
  'Content-Type':'application.json'
}

        axios.post('http://localhost:3400/register',//api call-to connect backend router
        params,headers).then((res)=>{console.log(res)})
        console.log("Register:",register);
        navigate("/")
    }
  return (
 <div id="login-box" className='maindiv' style={{ backgroundImage:" url('../../../public/assets/log.png')"
  }}>
      
  <div class="left">
  <form onSubmit={handleRegister} method='POST'> <h1>Sign up</h1>
  <input type="text" name="Username" placeholder="Username" required onChange={(e)=>{
           setRegister({...register,Username:e.target.value})}}/>
    <input type="text" name="Email" placeholder="E-mail"onChange={(e)=>{
           setRegister({...register,Email:e.target.value})}}required  />
    <input type="password" name="Password" placeholder="Password"onChange={(e)=>{
           setRegister({...register,Password:e.target.value})}} required />
          
   
    
    <input type="submit" name="signup_submit" value="Sign me up" />
    </form>
  </div>
  
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google+</button>
  </div>
  <div class="or">OR</div>
  
  
</div>

  
  
)
}

export default Register