// import { Link } from 'react-router-dom'
import React from 'react';
import './LoginPage.css'

  const SignInPage= ()=> {



   const [user,setUser]=  React.useState({name:"",password:""})
 
const onClickLogin = async ()=>{
  const response = await fetch("http://localhost:8080/api/Users/GetUser", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.,
    
  
    headers: {
      "Content-Type": "application/json",
      'accept': 'text/plain' ,
      // 'Access-Control-Allow-Origin': '*'
    },
    
      body: JSON.stringify(user), // body data type must match "Content-Type" header
      mode: "cors"
  });
  // axios({
  //   method: "POST",
  //   url: `https://localhost:64294/api/Users/GetUser`,
  //   data:user ,
  //   config: {
  //     headers: {
  //       "Accept": 'text/plain' ,
  //       "Content-Type": "application/json",
  //     }
  //   },
  // }).then(res=> console.log(res))
//  axios.post("https://localhost:64294/api/Users/GetUser",JSON.stringify(user)).then(data=>{
//   console.log(data)
//  })

  console.log(response)
  let data = await response.json()
  console.log( data)

}

    return (
      <div className="login-container">
      <h2>Welcome Back!</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input onChange={(e)=>setUser(old=>({...old,name:e.target.value}))}  type="text" id="username" name="username" value={user.name} required />
        <label htmlFor="password">Password:</label>
        <input onChange={(e)=>setUser(old=>({...old,password:e.target.value}))} type="password" id="password" name="password" value={user.password}  required />
        <button  onClick={(e)=>{e.preventDefault(); onClickLogin()}}>Login</button>
      </form>
    </div>
    )
}

export default SignInPage;