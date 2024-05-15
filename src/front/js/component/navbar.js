import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { actions, store } = React.useContext(Context);

	const navigate = useNavigate()

	// const onLogout = () => {
	// 	localStorage.removeItem('jwt-token')
	// 	navigate('/log-in')
	// }


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>

				{store.validatedEmail && <div className="ml-auto">

					<button className="btn btn-primary" onClick={() => actions.logout(navigate)}>Logout</button>

				</div>
				}

			</div>
		</nav>
	);
};
