import React from 'react'
import './sign.css'

function Signup() {
  return (
   
    <div class="signup-container">
    <div class="signup-box">
      <h2>Sign Up</h2>
      <form>
        <div class="form-group">
          <label for="name">Full Name:</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button onClick="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="Userlogin.jsx">Login here</a></p>
    </div>
  </div>
  )
}

export default Signup