import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onSubmit = () => {
            console.log(email, password)
    }
    
    return (
        <div className="container">
        
        <div className="mb-3 row">
        
        <label for="staticEmail" class="col-sm-2 col-form-label">Email adress</label>
        
        <div className="col-sm-10">
          <input 
            type="text" 
            readonly className="form-control-plaintext" 
            id="staticEmail" 
            value={email}
            onchange= {(e) => setEmail(e.target.value)}
            />
        </div>
      </div>
      
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        
        <div className="col-sm-10">
          <input 
            type="password" 
            className="form-control" 
            id="inputPassword"
            value={password} 
            onchange= {(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <div class="col-12">
    <button type="submit" class="btn btn-primary"
    onClick={onsubmit}
    >Submit</button>
  </div>
      </div>
        
    )
       
    
}

export default Login