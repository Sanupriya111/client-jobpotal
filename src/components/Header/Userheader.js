import React from 'react'
import "./header.css"
import {Link} from  "react-router-dom";

function Userheader() {
  return (
    <div>
        <nav class="navbar navbar-dark bg-dark text-white"> 
<div className="col-md-4"><h1 class="font-italic header"><b>InstaHyre</b></h1></div>
      <div className='col-md-8'>
            <ul class="nav justify-content-center font-weight-bold">
            <li class="nav-item li">
   HOME
  </li>
  
  <li class="nav-item li">
  APPLIED JOBS
  </li>
  <li class="nav-item li">
    PROFILE
  </li>
  <li class="nav-item li">
    INBOX
  </li>
  <li class="nav-item li">
    SIGN OUT
  </li>
</ul>

</div></nav>
    
  

    </div>
  )
}

export default Userheader