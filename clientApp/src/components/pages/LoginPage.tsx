// import { Link } from 'react-router-dom'
import React from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';

  const SignInPage= ()=> {


    const navigate = useNavigate();
   const [user,setUser]=  React.useState({name:"",password:""})
   const [isDisabled ,setisDisabled] = React.useState(false)
 
const onClickLogin = async ()=>{
  try {
    setisDisabled(true)
    const response = await fetch("http://localhost:8080/api/Users/GetUser", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        'accept': 'text/plain' ,
      },
      
        body: JSON.stringify(user), 
        mode: "cors"
    });
  
  if(response.ok){
    navigate("/home", { replace: true });
  }
    console.log(response)
    let data = await response.json()
    console.log( data)
  
    setisDisabled(false)
  
  } catch (error ) {
    setisDisabled(false)
    navigate("/home", { replace: true });
    
    console.log(error);
  }
 

}

    return (
      <div className="login-container">
      <h2>Welcome Back!</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input onChange={(e)=>setUser(old=>({...old,name:e.target.value}))}  type="text" id="username" name="username" value={user.name} required />
        <label htmlFor="password">Password:</label>
        <input onChange={(e)=>setUser(old=>({...old,password:e.target.value}))} type="password" id="password" name="password" value={user.password}  required />
        <button disabled ={isDisabled} onClick={(e)=>{e.preventDefault(); onClickLogin()}}>Login</button>
      </form>
    </div>
    )
}

export default SignInPage;