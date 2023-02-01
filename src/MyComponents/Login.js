import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInput,
} from 'mdb-react-ui-kit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Login = () => {
    // const [loading, setLoading] = useState(false);
    const history = useNavigate();

    const [userName, setuserName] = useState("");
    const handleuserName = (e) => setuserName(e.target.value);

    const [confirmPassword, setpassword] = useState("");
    const handlepassword = (e) => setpassword(e.target.value);

    const [passwordShown, setPasswordShown] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);

        fetch('http://localhost:8080/login', {

            method: 'post',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify({ userName, confirmPassword }),

            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(result => {

            if (result.status === "null") {
                alert("User not found ")
            }
            else if (result.status === "true") {
                sessionStorage.setItem("token", result.token);
                sessionStorage.setItem("username", result.user);
                sessionStorage.setItem("email", result.email);
                history("/dashboard");
            }
            else if (result.status === "incorrectPassword") {
                alert("Wrong User Name or Password");
            }
            else if (result.status === "adminConfirmation") {
                alert("wait for admin confirmation");
            }
            else if (result.status === "EV") {
                alert("Email Verification required");
            }
        });
        // try {
        //     await Auth.signIn(userName, confirmPassword);
        //     alert("Success!!", "Login Successfully", "success");
        //     history("/Dashboard");
        // } catch (error) {
        //     console.log(userName);
        //     console.log(error);
        //     alert("Error!!", error.message, "danger");
        // }
        //setLoading(false);
    };

    function goToSignup() {
        history("/Signup")
    }
    function goToForgotpassword() {
        history("/ForgotPassword")
    }

    function togglePassword(e) {
        e.preventDefault();
        setPasswordShown(!passwordShown);
    };
    return (
        <form >
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol sm='6'>
                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                            <span className="h1 fw-bold mb-0">Log In</span>
                        </div>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='username' placeholder="username" type="text" value={userName} onChange={handleuserName} size="lg" />
                            
                            <div className="d-flex mx-5 w-100 border rounded">
                                <MDBInput style={{border:'none'}} required wrapperClass='p-0 border-top-0 flex-fill m-0' id='password' placeholder="password" type={passwordShown ? "text" : "password"} value={confirmPassword} onChange={handlepassword} size="lg" >
                                </MDBInput>
                                {passwordShown ? <VisibilityIcon className="cursor-pointer my-auto mx-2" onClick={togglePassword}/> : <VisibilityOffIcon className="cursor-pointer my-auto mx-2" onClick={togglePassword}/>  }                                                            
                                {/* <button className="p-2 flex-fill col-2 btn btn-sm btn-info m-0" onClick={togglePassword} > show</button>                                 */}
                            </div>
                            
                            <p onClick={goToForgotpassword} className="ms-5 cursor-pointer link-info" size="sm">Forgot Password </p>
                            <button className="btn btn-info mb-4 px-5 mx-5 w-100" color='info' size='m' onClick={handleSubmit}>
                                Login
                            </button>
                            <p onClick={goToSignup} className="ms-5 cursor-pointer link-info">Register here</p>
                        </div>
                    </MDBCol>
                    <MDBCol sm='5' className='d-none d-sm-block px-0'>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/204/303/original/edge-computing-icon-vector.jpg" alt="Login" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </form>
    )
}

