import React from 'react'
import { Sidebar } from '../MyComponents/Sidebar'

export const GGpage = (props) => {
    return (
        <>            
            <div className="row p-0 m-0">
                <Sidebar />                
                <div className='col-10 m-0 p-3 pt-4'>
                    <b className='big-font text-uppercase'>Green Grass Core Device Details</b>
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
            </div>
        </>
    )
}
