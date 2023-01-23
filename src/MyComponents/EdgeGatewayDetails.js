import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CollapsibleTable } from './CollapsibleTable'
//import { CountDevices } from './smallComponents/CountDevices'
import { DeviceDetails } from './smallComponents/DeviceDetails'
import { Table2 } from './Table2'



export const EdgeGatewayDetails = (props) => {
    const { device } = useParams();
    const [data] = useState(props.table1.filter((d, index) => d['Edge_Gateway_Id'] === device)[0]);

    return (

        <div className='col-10 m-0 p-0'>
            <div className='p-3 box-color m-2 rounded shadow-max'>
                <h2 className=''></h2>
                <b className='big-font text-dark text-uppercase'>Edge Gateway ID - {data['Edge_Gateway_Id']}</b>
            </div>
            <div className='d-flex p-2 m-2 rounded shadow-max'>
                <DeviceDetails classdetails={"blue-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"STATUS"} ans={'ACTIVE'} />
                <DeviceDetails classdetails={"blue-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"DEVICE TYPE"} ans={data['Device_Type']} />
                <DeviceDetails classdetails={"blue-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"HARDWARE"} ans={data['Hardware']} />
                <DeviceDetails classdetails={"blue-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"REVISION"} ans={data['Revision']} />
                <DeviceDetails classdetails={"blue-grad device-tabs p-3 m-1 text-center rounded-some shadow"} head={"No of Edge Devices"} ans={3} />
            </div>
            <div className='d-flex p-1'>
                <div className='p-3 rounded flex-stretch shadow-max m-2'>
                    <h6>Edge Devices Connected</h6>
                    <Table2 data={props.table2} />
                </div>
                <div className='p-3 rounded flex-stretch shadow-max m-2'>
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
    )
}
