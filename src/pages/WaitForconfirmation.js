import { Alert, AlertTitle } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
export const WaitForconfirmation = () => {
  const history = useNavigate();
  function goToLogin() {
    history("/Login")
  }
  return (
      <div className='w-50 mx-auto pt-5'>
        <Alert className='p-5' severity="info">
          <AlertTitle>Email Verification Required</AlertTitle>
          Submission is successful and Verification link is sent to your email.<br></br> Email verification is needed to access the Dashboard.
          <br></br>
          <button className='btn btn-primary my-2' onClick={goToLogin}>Go to Login</button>
        </Alert>
      </div>    
  )
}

