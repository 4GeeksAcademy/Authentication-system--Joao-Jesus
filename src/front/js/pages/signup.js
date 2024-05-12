import React, { useState } from "react";
import { Context } from "../store/appContext";


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username,setUsername] = useState('')


    const onSubmit = () => {
            console.log(email, password)
    }
    
    return (
        <div className="container">

        <div className="mb-3 row">
        
        <label className="col-sm-2 col-form-label">username</label>
        
        <div className="col-sm-10">
          <input 
            type="text" 
            className="form-control-plaintext" 
            id="staticUser" 
            value={username}
            onChange= {(e) => setUsername(e.target.value)}
            />
        </div>
      </div>
        
        <div className="mb-3 row">
        
        <label className="col-sm-2 col-form-label">Email adress</label>
        
        <div className="col-sm-10">
          <input 
            type="text" 
            className="form-control-plaintext" 
            id="staticEmail" 
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
            />
        </div>
      </div>
      
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Password</label>
        
        <div className="col-sm-10">
          <input 
            type="password" 
            className="form-control" 
            id="inputPassword"
            value={password} 
            onChange= {(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <div className="col-12">
    <button type="submit" className="btn btn-primary"
    onClick={onSubmit}
    >Sign up</button>
  </div>
      </div>
        
    )
       
    
}

export default Signup