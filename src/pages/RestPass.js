import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBInput,    
} from "mdb-react-ui-kit";

export const RestPass = () => {
    const history = useNavigate();
    const valuee = useLocation();
    console.log("value is   " + valuee.state.e);
    //  const user=valuee.state.e;
    const userName = valuee.state.e;

    const [confirmPassword, setpassword] = useState("");
    const handlepassword = (e) => setpassword(e.target.value);

    const [newPassword, setnewpassword] = useState("");
    const handlenewpassword = (e) => setnewpassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);

        if (confirmPassword === newPassword) {
            fetch("http://localhost:8080/password", {
                method: "post",
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify({ userName, confirmPassword }),

                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result.status);

                    if (result.status === "true") {
                        alert("Password changed succesfully");
                        history("/Login");
                    } else {
                        alert("Error in changing password please try again later");
                    }
                });
        } else {
            alert("Password did'nt match please type again");
        }
    };

    function goToLogin() {
        history("/Login");
    }

    return (
        <form onSubmit={handleSubmit}>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol sm="6">
                        <div className="d-flex flex-row ps-5 pt-5">
                            <MDBIcon
                                fas
                                icon="crow fa-3x me-3"
                                style={{ color: "#709085" }}
                            />
                            <span className="h1 fw-bold mb-0">Add new Password</span>
                        </div>

                        <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                            <MDBInput
                                required
                                wrapperClass="mb-4 mx-5 w-100"
                                id="formControlLg"
                                placeholder="new password"
                                type="password"
                                value={newPassword}
                                onChange={handlenewpassword}
                                size="lg"
                            />
                            <MDBInput
                                required
                                wrapperClass="mb-4 mx-5 w-100"
                                id="formControlLg"
                                placeholder="confirm password"
                                type="password"
                                value={confirmPassword}
                                onChange={handlepassword}
                                size="lg"
                            />

                            <button
                                className="btn btn-info mb-4 px-5 mx-5 w-100"
                                color="info"
                                size="m"
                                type="submit"
                            >
                                Verify
                            </button>

                            <p className="ms-5">
                                {" "}
                                <a href="/login" onClick={goToLogin} class="link-info">
                                    Login
                                </a>
                            </p>
                        </div>
                    </MDBCol>
                    <MDBCol sm="5" className="d-none d-sm-block px-0">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/005/204/303/original/edge-computing-icon-vector.jpg"
                            alt="reset"
                            class="img-fluid"
                            style={{ objectFit: "cover", objectPosition: "left" }}
                        />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </form>
    );
};
