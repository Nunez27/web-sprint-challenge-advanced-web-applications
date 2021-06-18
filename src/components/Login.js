import axios from "axios";
import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    axios.post(`http://localhost:5000/api/login`)
    .then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  },[])


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "";
  //replace with error state

const changeHandler = () => {

}

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form>
          <input
          type='text'
          name='Username'
          onChange={changeHandler}
          placeholder='Username'
          />

          <input
          type='text'
          name='Password'
          onChange={changeHandler}
          placeholder='Password'
          />

        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.