import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        console.log(email, password);
        // Add your login logic here
        if (email === '' || password === '') {
            alert('Email or password should not be empty');
        } else {
             fetch(`${process.env.BACKEND_URL}/api/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then((res) => res.json())
                .then((resAsJson) => {
                    console.log('Response from Backend', resAsJson );
                    localStorage.setItem('jwt-token', resAsJson.token)
                    navigate('/')
                }).catch ((err) => {
                    console.log('Something wromg whencalling API', err)
                })
            } 
        
    };
    

    return (
        <div className="container">
            <form onSubmit={onSubmit}> {/* Added form element */}
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email address</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control-plaintext"
                            id="staticEmail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
