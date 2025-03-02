import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const HomePage = () => {
   const [input, setInput] = useState('');

   useEffect(() => {    


    
    }, [])

const navigate = useNavigate();
   const submitHandler = () => {
navigate(`/room/${input}`)
   }
  return (
    <div>

     


<div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name" />
      <input type="password" placeholder="password" />
      <input type="text" placeholder="email address" />
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <h2>Call join</h2>
    <form class="login-form">
      
      <input value={input} onChange={(e)=>setInput(e.target.value)}  type="text" placeholder="Enter Your Name" />
     
      <button onClick={submitHandler} >Join</button>
     
    </form>
  </div>
</div>








    </div>
  )
}

export default HomePage