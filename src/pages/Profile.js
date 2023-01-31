import React, { useEffect, useState } from 'react'
import { Sidebar } from '../MyComponents/Sidebar';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';


export const Profile = () => {

    const [user, setUser] = useState([]);
    const [editmode, setEditmode] = useState(false);
    const [username, setUsername] = useState();
    const [fname, setFname] = useState();
    const [lname, setLname] = useState()    
    var userName = "bharath";
    useEffect(() => {
        fetch("/profiledata",
            {
                method: 'post',
                body: JSON.stringify({ userName }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.json())
            .then(data => {
                setUser(data['Item']);
                setUsername(data['Item'].username)                
                setFname(data['Item'].firstName)
                setLname(data['Item'].lastName)
            })

    }, [userName]);


    function edit() {
        setEditmode(true)
    }

    function cancel() {
        setEditmode(false)
    }

    function submit() {
        fetch("/editprofile", {
            method: 'put',
            body: JSON.stringify({ username, fname, lname }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                if (data['response'] === true) {                    
                    window.location.reload(true)
                }
            })
    }


    return (
        <>
            <div className="row p-0 m-0">
                <Sidebar />
                <div className="col-10 p-0 m-0">
                    <section className="vh-100 w-100" style={{ backgroundColor: '#f4f5f7' }}>
                        <MDBContainer className="py-5 h-100">
                            <MDBRow className="justify-content-center align-items-center h-100">
                                <MDBCol lg="8" className="mb-4 mb-lg-0">
                                    <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                        <MDBRow className="g-0">
                                            <MDBCol md="4" className="gradient-custom text-center text-white"
                                                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                    alt="Avatar" className="mt-5" style={{ width: '80px' }} fluid />
                                                <MDBTypography tag="h5">{user.username}</MDBTypography>
                                            </MDBCol>
                                            <MDBCol md="8">
                                                <MDBCardBody className="p-4">
                                                    <MDBTypography tag="h6">Profile Information</MDBTypography>
                                                    <hr className="mt-0 mb-4" />
                                                    <MDBRow className="pt-1">
                                                        <MDBCol size="6" className="mb-3">
                                                            <MDBTypography tag="h6">First Name</MDBTypography>
                                                            <MDBCardText className="text-muted">{editmode ? <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} /> : user.firstName}</MDBCardText>
                                                        </MDBCol>
                                                        <MDBCol size="6" className="mb-3">
                                                            <MDBTypography tag="h6">Last Name</MDBTypography>
                                                            <MDBCardText className="text-muted">{editmode ? <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /> : user.lastName}</MDBCardText>
                                                        </MDBCol>
                                                    </MDBRow>

                                                    <MDBRow className="pt-1">
                                                        <MDBCol size="12" className="mb-3">
                                                            <MDBTypography tag="h6">Email</MDBTypography>
                                                        <MDBCardText className="text-muted">{user.email}</MDBCardText>
                                                        </MDBCol>
                                                        {/* <MDBCol size="6" className="mb-3">
                                                            <MDBTypography tag="h6">Phone</MDBTypography>
                                                            <MDBCardText className="text-muted">123 456 789</MDBCardText>
                                                        </MDBCol> */}
                                                    </MDBRow>

                                                    <div className="pt-1">
                                                        {
                                                            editmode ? "" : <button className='btn btn-primary btn-md' onClick={edit}>edit</button>
                                                        }
                                                        {editmode ?
                                                            <button className='btn btn-primary btn-md' onClick={submit}>
                                                                submit
                                                            </button> : ""
                                                        }

                                                        {editmode ?
                                                            <button className='btn btn-primary btn-md ms-2' onClick={cancel}>
                                                                cancel
                                                            </button> : ""
                                                        }

                                                    </div>

                                                </MDBCardBody>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>


                </div>
            </div>
        </>
    )
}
