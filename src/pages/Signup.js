import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MDBContainer, MDBCol, MDBRow, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export const Signup = () => {
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

  const [passwordShown, setPasswordShown] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    fetch('/write', {
      method: 'put',
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({ userName, firstName, lastName, email, confirmPassword }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json()).then(result => {
      if (result.status === -1) {
        alert("User Already Exists try another username")
      }
      else if(result.status === -2){
        alert("Email already exists")
      }
      else if(result.status === 1){
        history("/waitforconfirmation")
      }
    })



  };
  function goToLogin() {
    history("/Login")
  }

  function togglePassword(e) {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
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

              <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='username' placeholder="username" type="text" value={userName} onChange={handleuserName} />
              <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='fname' placeholder="First Name" type="text" value={firstName} onChange={handlefirstName} />
              <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='lname' placeholder="Last Name" type="text" value={lastName} onChange={handlelastName} />
              <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='email' placeholder="email" type="email" value={email} onChange={handleemail} />
              <div className="d-flex mx-5 w-100 border rounded">
                <MDBInput style={{ border: 'none' }} required wrapperClass='p-0 flex-fill m-0' id='password' placeholder="password" type={passwordShown ? "text" : "password"} value={confirmPassword} onChange={handlepassword}/>
                {passwordShown ? <VisibilityIcon className="cursor-pointer my-auto mx-2" onClick={togglePassword} /> : <VisibilityOffIcon className="cursor-pointer my-auto mx-2" onClick={togglePassword} />}
                {/* <button className="p-2 flex-fill col-2 btn btn-sm btn-info m-0" onClick={togglePassword} > show</button>                                 */}
              </div>
              <small id="emailHelp" className="mx-5 mb-3 form-text text-muted">Password must be atleast 6 letters long.</small>

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
            <img alt="yoamna" src="https://static.vecteezy.com/system/resources/previews/005/204/303/original/edge-computing-icon-vector.jpg" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </form>
  );
}
