import React,{useEffect,useState} from 'react'
import './singleview.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom';
function Singleview() {
  let navigate=useNavigate();
    let params=useParams();
    const loc = useLocation();
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
       setName(res.data.Company)
       setLocation(res.data.Location)
       setDis(res.data.Discription)
       setYear(res.data.Found)
       setNoemp(res.data.Employ)
    .catch((err)=>console.log(err))
},[]);

}) 
const handleDelete= () =>{
  axios.delete("http://localhost:3400/delete-data/"+params.id)
.then((res)=>{
  if(res.status===200){
    alert("Data Sucussfully deleted");
    window.location.reload()

  }else Promise.reject();

})
.catch((err)=>alert("somthing went Wrong"))
}

  return (
  //jobs.map(job=>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-body">


    
     
       <div class='div1' style={{ marginBottom: '-150px',color:'red'}}><img class='singleimg' src=''/>  <h4 style={{marginLeft:'20px'}}>Front End Developer </h4></div>
      <div style={{marginLeft:'220px',color:'blue'}}> <h3>{name}</h3>
       <h4>{location}</h4></div>
       
       <div>
           <h4 style={{marginLeft:'220px'}}><u>Job description</u></h4>
           <h5 style={{marginLeft:'220px'}}>Founded in {year}-{noemp} employees</h5>
           <p style={{padding:'50px'}}>
          {dis}</p>
          <div style={ {marginLeft:'100px'}}> <Button  variant="outlined" onClick={handleDelete} startIcon={<DeleteIcon />}>
  Delete
</Button>
<Link to={"/editform/"+params.id}><Button variant="outlined" startIcon={<EditIcon />}>
  Edit
</Button></Link></div>

       
            
           
</div>
</div>
</div>
</div>
</div> )

  
}

export default Singleview