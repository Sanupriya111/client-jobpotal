import React, { useEffect, useState } from 'react'
import { Link ,useParams} from 'react-router-dom'
import Singleview from '../singleview/Singleview'
import './Leftbar.css'
function Leftbar() {
  // const {id}=useParams()
  const[viewjob,setViewjob]=useState([{
    Company:'',
    Location:'',
    Discription:'',
    Found:'',
    Employ:'',
    Logo:''

  }])
useEffect(()=>{
  fetch(`http://localhost:3400/jobs`).then((res)=>{console.log('res',res)
  if(res.ok){
    return res.json()
  }

}).then(jsonRes=>setViewjob(jsonRes))
  })      
  return (
    <div>
      {viewjob.map(job=>
        <div class="jobbox">
            <div class='imgdiv'><img  class='img1'src={job.Logo}/></div>
            <div><h4 style={{color:'blue'}}><span>{job.Company}</span>&nbsp;<span>-Front-end developer</span></h4>
            <h5 style={{color:'red'}}><span>Jobs available in</span><span> {job.Location}</span></h5>
            <h6>Founded in <span style={{color:'blue'}}>{job.Found}</span><span style={{color:'blue'}}>-{job.Employ}</span>employess</h6>
            <div>{job.Discription}</div></div>
            <div class='viewdiv'>
            
        <Link to={"/singleview/"+job._id}>  <input type="button" data-target="#myModal" data-toggle="modal"value="View>>>"class="btn btn-success btn" />
        
        </Link>
            </div>
        </div>
        )}
    </div>
  )
}

export default Leftbar