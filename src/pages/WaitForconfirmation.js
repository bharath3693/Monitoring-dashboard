import React from 'react'
import {  useNavigate } from "react-router-dom";
export const WaitForconfirmation = ()=> {
  const history = useNavigate();
  function goToLogin(){
    history("/Login")
  }
  return (
    <body>
      <h1>Wait for confirmation from Admin</h1>

      <button onClick={goToLogin}>Go to Login</button>
      </body>
  )
}

