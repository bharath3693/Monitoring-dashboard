import React from 'react'

export const UserManagement = () => {
    return (
        <div className="col-10 pt-3 m-0 p-2">
            <h1 className='text-center'>Dashboard Approval Access</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Decision</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sai Bharath</td>
                        <td>bharath@gmail.com</td>
                        <td><button className='btn btn-sm btn-success'>accept</button> / <button className='btn btn-sm btn-danger'>Reject</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

