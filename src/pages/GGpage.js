import React from 'react'

export const GGpage = (props) => {
    return (
        <div className='col-10 m-0 p-2'>
            <h1 className='p-3'>Green Grass Core Device Details</h1>
            <table className='table table-bordered'>
                <thead className='table-head'>
                    <tr key={"head"}>
                        <th>No</th>
                        <th>Device Name</th>
                        <th>Status</th>
                        <th>Last Modified Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((d, index) => {
                        return (

                            <tr key={index}>
                                <td>{index}</td>
                                <td>{d['coreDeviceThingName']}</td>
                                <td>{d['status']}</td>
                                <td>{d['lastStatusUpdateTimestamp']} </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}
