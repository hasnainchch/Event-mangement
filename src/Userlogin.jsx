import React, { useState } from 'react'
import './login.css'


const Userlogin = () => {

  let [email,seta]=useState();
  let [password,setb]=useState();

  const submitForm = () => {

    //seta(a);
    alert(email + " " +password);

  }
  return (
   <>
 <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" onChange={(e) => seta(e.target.value)} placeholder="Enter your email" value={  email } required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" onChange={(e) => setb(e.target.value)}  g={  password } placeholder="Enter your password" required />
        </div>
        <button onClick={submitForm}> <b> Login </b></button>

        {email}<br />
        {password}
      </form>
    </div>
  </div>




   </>
  )
}

export default Userlogin;