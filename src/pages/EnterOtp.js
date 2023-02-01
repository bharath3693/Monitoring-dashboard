import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInput,

}
    from 'mdb-react-ui-kit';
export const EnterOtp = () => {
    const history = useNavigate();
    const [otp, setotp] = useState("");
    const handleotp = (e) => setotp(e.target.value);
    const valuee = useLocation();
    console.log("value is   " + valuee.state.e);
    const userName = valuee.state.e;
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/verify', {
            method: 'post',
            body: JSON.stringify({ otp }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(result => {
            console.log(result.status)
            if (result.status === "true") {
                history("/RestPass", {
                    state: {
                        e: userName
                    }
                });
            }
            else {
                alert("Wrong OTP");
            }
        });
    };

    function resendOtp() {
        fetch('http://localhost:8080/forgot', {
            method: 'post',
            body: JSON.stringify({ userName }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).then(result => {
            console.log(result.status);
            if (result.status === true) {
                console.log("true");
                alert("OTP send successfully");
            }
        });

    }
    function goToLogin() {
        history("/Login")
    }
    return (
        <form onSubmit={handleSubmit}>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol sm='6'>
                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                            <span className="h1 fw-bold mb-0">Enter OTP</span>
                        </div>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                            <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="OTP" type="text" value={otp} onChange={handleotp} size="lg" />
                            <button className="btn btn-info mb-4 px-5 mx-5 w-100" color='info' size='m' type="submit">
                                Verify
                            </button>
                            <p className='ms-5'>  <p onClick={resendOtp} className="cursor-pointer link-info m-0">Resend OTP</p></p>
                            <p className='ms-5'>  <p onClick={goToLogin} class="cursor-pointer link-info m-0">Login</p></p>
                        </div>
                    </MDBCol>
                    <MDBCol sm='5' className='d-none d-sm-block px-0'>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/204/303/original/edge-computing-icon-vector.jpg"
                            alt="otp" class="img-fluid" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </form>
    )
}


