import React from 'react'
import "./postjobform.css"
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
function Postjobform() {
  // const [file,setFile]=useState([" "])

    const [postjob,setPostjob]=useState({
        Company:'',
        Location:'',
        Discription:'',
        Found:'',
        Employ:'',
        Logo:''

    });
    const handleJobs=(e)=>{
        
        e.preventDefault();
        //console.log(" please login",login);
       

        const params={
            Company:postjob.Company,
            Location:postjob.Location,
            Discription:postjob.Discription,
            Found:postjob.Found,
            Employ:postjob.Employ,
            Logo:postjob.Logo
    
            }
         const headers={
                'Content-Type':'application.json',
                
              }
              axios.post('http://localhost:3400/postjob',//api call-to connect backend router
              params,headers).then((res)=>{console.log(res)
              })      
           
    }
   
    
  return (
    <div>
        <div className='postformdiv'><p className='postjobp'><u>Register Your company</u></p></div>
        <div className='postformdiv2'>
            <form className='postform' >
            <b className='postjobb'>  Company Name:</b><input type="text"  name="Company" onChange={(e)=>{
           setPostjob({...postjob,Company:e.target.value})}} /><br/>
            <b className='postjobb'> Location:</b><input type="text" name="Location"onChange={(e)=>{
           setPostjob({...postjob,Location:e.target.value})}} /><br/>
            <b className='postjobb'>  About Your Company:</b><input type="text" name="Discription" onChange={(e)=>{
           setPostjob({...postjob,Discription:e.target.value})}} /><br/>
            <b className='postjobb'>  Founded year:</b><input type="text" name='Found' onChange={(e)=>{
           setPostjob({...postjob,Found:e.target.value})}}/><br/>
            <b className='postjobb'>  No of employees</b><input type="text" name='Employ'onChange={(e)=>{
           setPostjob({...postjob,Employ:e.target.value})}}/><br/>
            <b className='postjobb'>  Company Logo:</b>&nbsp;&nbsp;
            <input  id="formFileSm" type="file"  name='Logo'onChange={(e)=>{
           setPostjob({...postjob,Logo:e.target.value})}} /><br/>
           <input type="Submit"onSubmit={handleJobs}class="btn btn-info postformbtn" value="Post"/>
            </form>
        </div>
    </div>
  )
}

export default Postjobform