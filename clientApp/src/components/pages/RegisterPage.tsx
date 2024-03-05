// import { Link } from 'react-router-dom'

import './RegisterPage.css'

export default function SignUpPage() {

    return (
        <div className="register-container">
        <h2>Create an Account</h2>
        <form className="register-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
          <button type="submit">Register</button>
        </form>
      </div>
    )

}




/* .login-container .register-container {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); 
} */

// .login-container, .register-container {
//   /* Styles previously defined for .login-container can be applied here */
//   background-color: #fff;
//   border-radius: 15px;
//   padding: 20px;
//   width: 50%;
//   margin: 0 auto;
//    margin-top:10%;
//   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
// }

// h2 {
//   /* Styles previously defined for h2 can be applied here */
//   text-align: center;
//   margin-bottom: 20px;
//   color: #212529;
// }
// body{
//   padding:0;
//   margin:0;
//   background-color:#339999;
// }
// .register-container h2 {
//   color:#339999;
// }
// .login-form, .register-form {
//   /* Styles specific to forms */
//   background-color: #f8f9fa;
//   padding: 15px;
//   border-radius: 5px;
// }


// h2 {
//   text-align: center;
//   margin-bottom: 20px;
//   color: #212529; /* Text color */
// }

// .login-form {
//   background-color: #f8f9fa; /* Light gray background */
//   padding: 15px;
//   border-radius: 5px;
// }

// label {
//   display: block;
//   margin-bottom: 5px;
//   color: #212529; /* Text color */
// }

// button {
//     width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 3px;
//   margin-bottom: 10px;
//   background-color: #339999; /* Primary blue */
//   color: white;
//   cursor: pointer;
//   border: none; /* Remove border for cleaner look */
//   border-radius: 5px;
// }

// button:hover {
//   background-color: #0062cc; /* Darker blue on hover */
// }

// a {
//   text-decoration: none;
//   color: #666;
//   float: right;
// }

// form label,form input{
//   display:inline;
// }
// .inputRow{
//   margin: 10px 0;
// }
// .inputRow div{
//   width:10%;
//   margin:0;
//   display:inline;
// }
// .inputRow input{
//   width:75%;
//   display:inline;
// }
// .inputRow input{
//   border: none;
//     border-bottom-width: medium;
//     border-bottom-style: none;
//     border-bottom-color: currentcolor;
//   border-bottom: 3px solid #399;
// }

// .inputCircle::before{
//        content: '';
//        display: inline-block;
//        width: 5px;
//        height: 5px;
//        -moz-border-radius: 7.5px;
//        -webkit-border-radius: 7.5px;
//        border-radius: 7.5px;
//        background-color: #339999;
//   position:relative;
//       top:7px;
//       left:6px;
// }
// .inputCircle::after{
//        content: '';
//        display: inline-block;
//        width: 5px;
//        height: 5px;
//        -moz-border-radius: 7.5px;
//        -webkit-border-radius: 7.5px;
//        border-radius: 7.5px;
//        background-color: #339999;
//   position:relative;
//       top:7px;
//       left:-1;
// }