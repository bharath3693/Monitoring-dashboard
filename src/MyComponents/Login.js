import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInput,
} from 'mdb-react-ui-kit';

export const Login = () => {

    // const [loading, setLoading] = useState(false);
    const history = useNavigate();

    const [userName, setuserName] = useState("");
    const handleuserName = (e) => setuserName(e.target.value);

    const [confirmPassword, setpassword] = useState("");
    const handlepassword = (e) => setpassword(e.target.value);

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

            console.log(result.status)

            if (result.status === "true") {
                history("/dashboard");
            }
            else if (result.status === "incorrectPassword") {
                alert("Incorrect Password");
            }
            else if (result.status === "adminConformation") {
                alert("wait for admin confirmation");
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

    return (

        <form onSubmit={handleSubmit}>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol sm='6'>
                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                            <span className="h1 fw-bold mb-0">Log In</span>
                        </div>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="username" type="text" value={userName} onChange={handleuserName} size="lg" />
                            <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="password" type="password" value={confirmPassword} onChange={handlepassword} size="lg" />
                            <p className='ms-5'>  <a onClick={goToForgotpassword} class="link-info" size="sm">Forgot Password </a></p>
                            <button className="btn btn-info mb-4 px-5 mx-5 w-100" color='info' size='m' type="submit"
                            >Login</button>
                            <p className='ms-5'>  <a onClick={goToSignup} class="link-info">Register here</a></p>
                        </div>
                    </MDBCol>

                    <MDBCol sm='5' className='d-none d-sm-block px-0'>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/204/303/original/edge-computing-icon-vector.jpg" alt="Login image" class="img-fluid" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </form>
    )
}

