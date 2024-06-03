import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { store, actions } = useContext(Context);

    const navigate = useNavigate()

    const onSubmit = async (event) => {
        try {
            await event.preventDefault();

            if (email === '' || password === '') {
                alert('Email or password should not be empty');
            }

            await actions.login(email, password, navigate)

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className="container">
            <form className="mt-2"> 
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
