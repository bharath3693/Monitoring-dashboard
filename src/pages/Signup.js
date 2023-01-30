import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const [userName, setuserName] = useState("");
  const handleuserName = (e) => setuserName(e.target.value);
  const [firstName, setfirstName] = useState("");
  const handlefirstName = (e) => setfirstName(e.target.value);

  const [lastName, setlastName] = useState("");
  const handlelastName = (e) => setlastName(e.target.value);

  const [email, setemail] = useState("");
  const handleemail = (e) => setemail(e.target.value);

  const [confirmPassword, setpassword] = useState("");
  const handlepassword = (e) => setpassword(e.target.value);
  
  const handleSignUp = async (e) => {
    e.preventDefault();        
    
    fetch('/write', {
      method: 'put',
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({ userName, firstName, lastName, email, confirmPassword}),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => {      
      history("/WaitForconfirmation");
    })
   
    // try {
    //   await Auth.signUp({
    //     username: userName,
    //     password: confirmPassword,
    //     attributes: {
    //       email,
    //       name

    //     },
    //   });
    //   alert("Success!!", "Signup was successful", "success");
    //   history("/WaitForconfirmation");
    // } catch (error) {
    //   console.log(userName);
    //   alert("Error!!", error.message, "danger");
    // }
    //setLoading(false);

    

  };
  function goToLogin() {
    history("/Login")
  }
  return (
    <form onSubmit={handleSignUp} >
      <MDBContainer fluid>
        <MDBRow>

          <MDBCol sm='6'>

            <div className='d-flex flex-row ps-5 pt-5'>
              <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
              <span className="h1 fw-bold mb-0">Sign Up</span>
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

              <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="username" type="text" value={userName} onChange={handleuserName} />
              <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="First Name" type="text" value={firstName} onChange={handlefirstName} />
              <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="Last Name" type="text" value={lastName} onChange={handlelastName} />
              <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="email" type="email" value={email} onChange={handleemail} />
              <div className="row">
                <div className="col-10">
                  <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="password" type="password" value={confirmPassword} onChange={handlepassword} data-toggle="tooltip" data-placement="left" title="Tooltip on left" />
                </div>
                <div className="col-2">
                  <button type="button" wrapperClass='mb-4 mx-5 w' class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
                    criteria
                  </button>
                </div>
              </div>
              {/* <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type="submit" */}
              {/* disabled={loading}> */}
              {/* {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />} */}
              {/* Sign Up
          </MDBBtn> */}

              <button className="btn btn-info mb-4 px-5 mx-5 w-100" color='info' size='m' type="submit"
              >Signup</button>
              <button className="btn btn-info mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={goToLogin}> login &rarr;</button>

            </div>

          </MDBCol>

          <MDBCol sm='5' className='d-none d-sm-block px-0'>
            <img src="https://static.vecteezy.com/system/resources/previews/005/204/303/original/edge-computing-icon-vector.jpg"
              alt="Login image" class="img-fluid" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </form>
  );
}
