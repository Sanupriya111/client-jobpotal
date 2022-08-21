import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import "./home.css"
import axios from 'axios'
import Leftbar from '../../components/leftbar/Leftbar'
function Home() {
  let userData=''
  const token=JSON.parse(localStorage.getItem("userauthentication"))
  console.log("token : : ",token);
  
const ShowName=()=>{
  console.log("token :: ",token);
   fetch('http://localhost:3400/home',
   {method:'post',
   headers:{
    'Content-Type':'application/json',
    'Authorization':token
  }}).then((response)=>{
  console.log('home token :',response)
  
}).then((res)=>{
console.log(res)
})}
  return (
    <><div>
      
      <div class='row-md-12 '>
     <Header/></div>
     <div class="row-md-12 pdiv"><p class='  p1'>Showing 1-20 Out of 20 jobs for you</p>&nbsp;
     <input class="form-control searchbox" type="search" placeholder="Find jobs...." aria-label="Search"/>
     <button type="submit" class="serbtn"><i class="fa fa-search" ></i></button>

     </div>
     <div class='row maindiv'>
     <div class='col-md-4'></div>
     <div class='col-md-8'><Leftbar/></div>
     </div>
    </div>
     </>
  )
}

export default Home