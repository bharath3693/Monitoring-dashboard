import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
//import { CountDevices } from './smallComponents/CountDevices'
import { DeviceDetails } from './smallComponents/DeviceDetails'
import { Table2 } from './Table2'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Sidebar } from './Sidebar';


export const EdgeGatewayDetails = (props) => {
    const { device } = useParams();
    const [data] = useState(props.table1.filter((d, index) => d['Edge_Gateway_ID'] === device)[0]);
    const [status] = useState(true);
    return (
        <>
            <div className="row p-0 m-0">
                <Sidebar />
                <div className='col-10 m-0 p-0'>
                    <div className='d-flex justify-content-start align-items-center p-3 box-color m-2 rounded shadow-max'>
                        <b className='m-2 big-font text-dark text-uppercase'>Edge Gateway ID - {data['Edge_Gateway_ID']}</b>
                        {/* <span className="bg-white shadow badge badge-white text-dark border">Status : {status ? <CheckCircleIcon sx={{color:'green'}}/> : <CancelIcon sx={{color:'red'}} />}  </span> */}
                        {status ? <span className="shadow bg-success badge badge-success">Status : <CheckCircleIcon />  </span>
                            : <span className="shadow bg-danger badge badge-danger">Status : <CancelIcon /> </span>}
                        {/* <DeviceDetails classdetails={"w-50 flex-shrink-1 blue-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"STATUS"} ans={'ACTIVE'} /> */}
                    </div>
                    <div className='d-flex justify-content-around p-2 m-2 rounded shadow-max'>
                        <DeviceDetails classdetails={"purple-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"DEVICE TYPE"} ans={data['Device_Type']} />
                        <DeviceDetails classdetails={"purple-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"CORE DEVICE NAME"} ans={data['Core_Device_Name']} />
                        <DeviceDetails classdetails={"purple-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"HARDWARE"} ans={data['Hardware']} />
                        <DeviceDetails classdetails={"purple-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"REVISION"} ans={data['Revision']} />
                        <DeviceDetails classdetails={"purple-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"LOCATION"} ans={data['Device_Location']} />
                        <DeviceDetails classdetails={"purple-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"No of Edge Devices"} ans={3} />
                    </div>
                    <div className='d-flex-column p-1'>
                        <div className='p-3 rounded shadow-max' style={{ flex: 1 }}>
                            <h6>Edge Nodes Connected</h6>
                            <Table2 data={props.table2} />
                        </div>
                        <div className='p-3 rounded shadow-max m-1' style={{ flex: 1 }}>
                            <h6>Green Grass Devices Connected</h6>
                            <table className='table table-bordered'>
                                <thead className="table-head">
                                    <tr key={'head'}>
                                        <th>No</th>
                                        <th>Green Grass Device</th>
                                        <th>Status</th>
                                        <th>Last Updated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.table3.map((d, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{d['coreDeviceThingName']}</td>
                                                <td>{d['status']}</td>
                                                <td>{d['lastStatusUpdateTimestamp']}</td>
                                            </tr>

                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>


                    </div>





                </div>
            </div>
        </>
    )
}
