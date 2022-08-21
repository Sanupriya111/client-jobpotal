import React from 'react'
import { useParams} from 'react-router-dom'

import { useLocation } from 'react-router-dom';

import { useState,useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
function Editform() {
  // const [file,setFile]=useState([" "])

  let navigate=useNavigate();
  let params=useParams();
console.log(params);
  const[name,setName]=useState('');
  const[location,setLocation]=useState('');
  const[dis,setDis]=useState('');
  const[year,setYear]=useState('');
  const[noemp,setNoemp]=useState('');

useEffect(()=>{
  axios.get("http://localhost:3400/singleview/"+params.id 
  )
  .then((res)=>{
     console.log(res.data)
     const {Company,Location,Discription,Found,Employ}=res.data;
     setName(Company)
     setLocation(Location)
     setDis(Discription)
     setYear(Found)
     setNoemp(Employ)
  .catch((err)=>console.log(err))
},[]);

}) 
const handleUpdate=()=>{
  axios.post("http://localhost:3400/update/"+params.id,{
    name,location,dis,year,noemp
  }
  ).then((res)=>{
    console.log("hi==>",res)
    if(res.status===200){
      alert("data sucssfully updated");
      console.log('hiii')
    }else
    {
      alert("data updation failed")
    }
  }).catch((err)=>console.log(err))
}

  return (
    <div>
        <div className='postformdiv'><p className='postjobp'><u>Edit Your Details</u></p></div>
        <div className='postformdiv2'>
            <form className='postform' >
            <b className='postjobb'>  Company Name:</b><input type="text"  id="Company"value={name} 
onChange={(e)=>{setName(e.target.value)}}/>
 <br/>
            <b className='postjobb'> Location:</b><input type="text" id="Location"value={location} 
onChange={(e)=>{setLocation(e.target.value)}}/>
<br/>
            <b className='postjobb'>  About Your Company:</b><input type="text" id="Discription" value={dis} 
onChange={(e)=>{setDis(e.target.value)}}/>
<br/>
            <b className='postjobb'>  Founded year:</b><input type="text" id='Found' value={year} 
onChange={(e)=>{setYear(e.target.value)}}/>
<br/>
            <b className='postjobb'>  No of employees</b><input type="text" id='Employ'value={noemp} 
onChange={(e)=>{setNoemp(e.target.value)}}/>
<br/>
            {/* <b className='postjobb'>  Company Logo:</b>&nbsp;&nbsp;
            <input  id="formFileSm" type="file"  name='Logo'onChange={(e)=>{
           setPostjob({...postjob,Logo:e.target.value})}} /><br/> */}
           <input type="Submit" onSubmit={handleUpdate} class="btn btn-info postformbtn" value="Update"/>
            </form>
        </div>
    </div>
  )
}

export default Editform