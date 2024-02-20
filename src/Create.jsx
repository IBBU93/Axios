import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
  const [values , setValues]=useState({
    name:' ',
    email:' ',
    phone:' '
  })

  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users' ,values)
    .then(res => {
      console.log(res);
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
   <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
    <div className='w-50 border bg-white shadow px-3 pt-3 pb-5 rounded'>
    <h1>Add a User</h1>
    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="Name" className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Name"
     onChange={e=> setValues({...values , name: e.target.value})}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Email</label>
    <input type="Email" className="form-control" id="exampleInputEmail1" placeholder="Enter your Email"
    onChange={e=> setValues({...values , email: e.target.value})}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Phone</label>
    <input type="number" className="form-control" id="exampleInputnumber1" placeholder="Number"
     onChange={e=> setValues({...values , phone: e.target.value})}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" className="btn btn-success me-2"  onChange={e=> setValues({...values , Submit: e.target.value})}>Submit</button>
  <Link to="/" className='btn btn-primary me-2'>Back</Link>

</form>
    </div>
   </div>
  )
}

export default Create