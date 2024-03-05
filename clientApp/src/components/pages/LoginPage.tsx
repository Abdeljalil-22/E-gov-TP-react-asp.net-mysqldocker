// import { Link } from 'react-router-dom'

import React from 'react';
import './LoginPage.css'

  const SignInPage= ()=> {



   const [user,setUser]=  React.useState({username:"",password:""})
 
const onClickLogin = async ()=>{
  const response = await fetch("http", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
  
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify(user), // body data type must match "Content-Type" header
  });

  console.log(user)

}

    return (
      <div className="login-container">
      <h2>Welcome Back!</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input onChange={(e)=>setUser(old=>({...old,username:e.target.value}))}  type="text" id="username" name="username" value={user.username} required />
        <label htmlFor="password">Password:</label>
        <input onChange={(e)=>setUser(old=>({...old,password:e.target.value}))} type="password" id="password" name="password" value={user.password}  required />
        <button  onClick={(e)=>{e.preventDefault(); onClickLogin()}}>Login</button>
      </form>
    </div>
    )
}

export default SignInPage;