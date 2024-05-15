
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			validatedEmail: null,
		},
		actions: {

			validate: async () => {

				try {
					const myToken = localStorage.getItem('jwt-token');

					const response = await fetch(process.env.BACKEND_URL + "/api/validate", {
						method: 'GET',
						headers: {
							"Authorization": "Bearer " + myToken,
							"Content-Type": "application/json"
						}
					})
					const responseAsJson = await response?.json()

					if (responseAsJson) {
						setStore({ validatedEmail: responseAsJson.email });
					}


				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			signUp: async (email, password, navigate) => {
				try {

					console.log("email")
					console.log(email)
					console.log(password)

					const response = await fetch(process.env.BACKEND_URL + "/api/sign-up", {
						method: 'POST',
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*"
						},
						body: JSON.stringify({
							'email': email,
							'password': password
						}),

					})


					const responseAsJson = await response.json()

					console.log("responseAsJson")
					console.log(responseAsJson)

					if (responseAsJson.msg == "New User Signed up...") {
						navigate("/log-in")
					}



				} catch (error) {
					console.log("error from signUp action")
					console.log(error)
				}

			},
			logout: (navigate) => {
				localStorage.removeItem('jwt-token')
				setStore({ validatedEmail: null });
				navigate('/log-in')
			},
			login: async (email, password, navigate) => {
				try {

					const response = await fetch(process.env.BACKEND_URL + "/api/log-in", {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							'email': email,
							'password': password
						}),
					})


					const responseAsJson = await response.json()


					console.log("responseAsJson")
					console.log(responseAsJson)


					if (responseAsJson.token) {
						localStorage.setItem('jwt-token', responseAsJson.token)
						setStore({ validatedEmail: email });
						navigate('/')
					} else {
						alert("email or password are wrong")
					}

				} catch (error) {

					console.log("error")
					console.log(error)
				}

			}
		},


	}
};


export default getState;
