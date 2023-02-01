import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";

export const VerificationSuccess = () => {
  const history = useNavigate();
  function goToLogin() {
    history("/Login")
  }
  return (
    <div className='w-50 mx-auto pt-5'>
      <Alert className='p-5' severity="success">
        <AlertTitle>Email Verification succesfull</AlertTitle>
        Email verification is done. please wait for admin to approve your request to access the Dashboard.
        <br></br>
        <button className='btn btn-primary my-2' onClick={goToLogin}>Go to Login</button>
      </Alert>
    </div>
  )
}

