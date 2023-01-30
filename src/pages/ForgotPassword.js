import React, {useState} from 'react'
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


export const ForgotPassword = () => {

    const history = useNavigate();

    const [userName, setuserName] = useState("");
    const handleuserName = (e) => setuserName(e.target.value);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
       

          fetch('http://localhost:8080/forgot', {
            
            method: 'post',
            
             body: JSON.stringify({userName}),
            
            headers: {
                'Content-Type': 'application/json'
            },
          }).then(res => res.json()).then(result => {
            
            console.log(result.status)

            if(result.status=="true")
            {
                history("/EnterOtp" , {
                    state: {
                        e: userName
                    }
                });
            }
        //     else if(result.status=="incorrectPassword")
        //     {
        //             alert("Incorrect Password");
        //     }
        //     else if(result.status=="adminConformation")
        //     {
        //             alert("wait for admin confirmation");
        //     }
            
        
         });

        
    };


    function goToLogin(){
        history("/Login")
      }
  return (
    <form

            onSubmit={handleSubmit}
        >
            <MDBContainer fluid>
                <MDBRow>

                    <MDBCol sm='6'>

                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                            <span className="h1 fw-bold mb-0">Forgot Password</span>
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                        

                            <MDBInput required wrapperClass='mb-4 mx-5 w-100' id='formControlLg' placeholder="username" type="text" value={userName} onChange={handleuserName} size="lg" />
                            
         

                            <button  className="btn btn-info mb-4 px-5 mx-5 w-100" color='info' size='m' type="submit"
                               >Submit</button>


                           
                            <p className='ms-5'>  <a onClick={goToLogin} class="link-info">Login</a></p>
                            

                        </div>

                    </MDBCol>

                    <MDBCol sm='5' className='d-none d-sm-block px-0'>
                        <img src="https://static.vecteezy.com/system/resources/previews/005/204/303/original/edge-computing-icon-vector.jpg"
                            alt="Login image" class="img-fluid" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </form>
  )
}


