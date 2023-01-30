import React, { useEffect, useState } from "react";
import { Navbar } from "../MyComponents/Navbar";
import { Sidebar } from "../MyComponents/Sidebar";

export const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const interval = setInterval(() => {
            fetch("/userdata").then(
                response => response.json()).then((data) => {
                    setUsers(data['Items'])
                })
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    function reject(e) {
        let userName = e.target.value;
        fetch("/reject", {
            method: "post",
            body: JSON.stringify({ userName }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data)
            })

    }

    function approve(e) {
        let userName = e.target.value;

        fetch("/approve", {
            method: "post",
            body: JSON.stringify({ userName }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className="row p-0 m-0">
                <Sidebar />
                <div className="col-10 pt-3 m-0 p-2 pt-4">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                Pending Request
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                Accepted
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                Rejected
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            <div className="p-3">
                                <b className="big-font text-uppercase">Pending Requests </b>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr key="pending">
                                            <th>No</th>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>Approval</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users &&
                                            users.map((d, index) => {
                                                if (d.status === 2) {
                                                    return (
                                                        <tr key={d.username}>
                                                            <td>{index + 1}</td>
                                                            <td>{d.username}</td>
                                                            <td>{d.email}</td>
                                                            <td>
                                                                <button value={d.username} onClick={e => approve(e)} className="btn btn-sm btn-success">
                                                                    Approve
                                                                </button>
                                                                --
                                                                <button value={d.username} onClick={e => reject(e)} className="btn btn-sm btn-danger">
                                                                    Reject
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                                return "";
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <div className="p-3">
                                <b className="big-font text-uppercase">Accepted Requests </b>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr key="accepted">
                                            <th>No</th>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            {/* <th>Approval</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((d, index) => {
                                                if (d.status === 1) {
                                                    return (
                                                        <tr key={d.username}>
                                                            <td>{index + 1}</td>
                                                            <td>{d.username}</td>
                                                            <td>{d.email}</td>
                                                        </tr>
                                                    )
                                                }
                                                return "";
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="contact"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                        >
                            <div className="p-3">
                                <b className="big-font text-uppercase">Rejected Request</b>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr key="rejected">
                                            <th>No</th>
                                            <th>User Name</th>
                                            <th>Email</th>
                                            <th>Reasons</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((d, index) => {
                                                if (d.status === -1) {
                                                    return (
                                                        <tr key={d.username}>
                                                            <td>{index + 1}</td>
                                                            <td>{d.username}</td>
                                                            <td>{d.email}</td>
                                                            <td>Reason for the rejection.</td>
                                                        </tr>
                                                    )
                                                }
                                                return "";
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
