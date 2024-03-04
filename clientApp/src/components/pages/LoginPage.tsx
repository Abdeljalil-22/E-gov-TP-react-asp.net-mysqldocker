// import { Link } from 'react-router-dom'

import './LoginPage.css'

  const SignInPage= ()=> {
    return (
      <div className="login-container">
      <h2>Welcome Back!</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
        <a href="#">Forgot Password?</a>
      </form>
    </div>
    )
}

export default SignInPage;