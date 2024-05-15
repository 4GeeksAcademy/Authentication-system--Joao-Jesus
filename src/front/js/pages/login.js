import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const onSubmit = async () => {
        //e.preventDefault(); // Prevent default form submission behavior
        console.log(email, password);
        // Add your login logic here
        if (email === '' || password === '') {
            alert('Email or password should not be empty');
        } else {
            fetch(process.env.BACKEND_URL + "/api/validate", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                }),
            }).then((res) => res.json())
                .then((resAsJson) => {
                    console.log('Response from Backend', resAsJson);
                    localStorage.setItem('jwt-token', resAsJson.token)
                    navigate('/')
                }).catch((err) => {
                    console.log('Something went wrong when calling API', err)
                })
        }

    };


    return (
        <div className="container">
            <form className="mt-2"> {/* Added form element */}
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
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
