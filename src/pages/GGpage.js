import React from 'react'

export const GGpage = () => {
    return (
        <div className='col-10 m-0 p-2'>
            <h1 className='p-3'>Green Grass Core Device Details</h1>
            <table className='table table-bordered'>
                <thead className='table-head'>
                    <tr>
                        <th>No</th>
                        <th>Device Name</th>
                        <th>Status</th>
                        <th>Last Modified Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>GG Name1</td>
                        <td>Healthy</td>
                        <td>9:30PM </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>GG Name2</td>
                        <td>UN Healthy</td>
                        <td>8:30PM </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
