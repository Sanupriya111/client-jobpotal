import React from 'react'
import Header from '../../components/Header/Header'
import "./post.css"
import {Link} from  "react-router-dom";
import Postjobform from './Postjobform';
function Post() {
  return (
    <div>
<Header/>
<div className='postdiv'>
<div><h1 class='post_p'><b>Let's make your next great hire. <br/>Fast.</b>
<br/><Link to="/postjob"> <button type="button" class="btn btn-primary postbtn">POST A JOB</button></Link>
</h1></div>
<div><img  className='postimg' src='./assets/bg3.jpg' /></div>
    </div></div>
  )
}

export default Post