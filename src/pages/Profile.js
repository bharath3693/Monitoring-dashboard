import React, { useEffect, useState } from 'react'
import { Navbar } from '../MyComponents/Navbar';
import { Sidebar } from '../MyComponents/Sidebar';

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
            <Navbar />
            
            <div className="row p-0 m-0">
                <Sidebar />                   
                <div className="col-10 p-0 m-0 pt-3">
                    username :  {user.username}
                    <br></br>
                    fname : {editmode ? <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} /> : user.firstName}
                    <br></br>
                    Lnamne :{editmode ? <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /> : user.lastName}
                    <br></br>
                    Email : {user.email}
                    <br></br>
                    <br></br>
                    {
                        editmode ? "" : <button onClick={edit}>edit</button>
                    }

                    {editmode ?
                        <button onClick={submit}>
                            submit
                        </button> : ""
                    }

                    {editmode ?
                        <button onClick={cancel}>
                            cancel
                        </button> : ""
                    }

                </div>
            </div>
        </>
    )
}
