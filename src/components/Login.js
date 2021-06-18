import React, { useState ,useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {
  const [userInformation, setUserInformation] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const { push } = useHistory();

  const handleChange = (e) => {
    setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value
    })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const login = (e) => {
  e.preventDefault();
  axios.post(`'http://localhost:5000/api'/login`, userInformation)
  .then(res => {
    console.log('happy path!', res.data.payload);
    localStorage.setItem('token', res.data.payload)
    push('/protected')
  })
  .catch(error => {
    console.log(error, 'oops, something went wrong!')
  })

  // useEffect(()=>{
  //   // make a post request to retrieve a token from the api
  //   // when you have handled the token, navigate to the BubblePage route
  // });

  // const error = "";
  //replace with error state
  if (userInformation.username === "" || userInformation.password === '') {
    setError('Username and Password required.') 
  } else if (userInformation.username !== 'Lambda' || userInformation.password !== 'i<3Lambd4'){
    setError('Username or Password Incorrect')
  }
};

return (
  <div>
    <h1>Welcome to the Bubble App!</h1>
    <div data-testid="loginForm" className="login-form">
      <h2>Build login form here</h2>
      <form onSubmit={login}>
        <input 
        name='username' 
        placeholder= 'username' 
        type='text' 
        onChange={handleChange} 
        value={userInformation.username} />
        <input 
        name='password' 
        placeholder= 'password' 
        type='password' 
        onChange={handleChange} 
        value={userInformation.password} />
         <button>Login</button>
      </form>
    </div>

    <p data-testid="errorMessage" className="error">{error}</p>
  </div>
);
};
export default Login;
