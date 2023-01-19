import React from 'react'
//import { CountDevices } from './smallComponents/CountDevices'
import { DeviceDetails } from './smallComponents/DeviceDetails'
import { Table2 } from './Table2'



export const EdgeDeviceDetails = (props) => {


    return (
        <div className='col-10 m-0 p-0'>
            <h1 className='p-3 box-color m-2 rounded shadow-max text-dark'>{props.table1[0]['Edge_Gateway_Id']}</h1>
            <div className='d-flex justify-content-around p-1 m-2 rounded shadow-max'>
                <div>
                    <DeviceDetails classdetails={"blue-grad p-3 m-1 text-center rounded-some shadow text-white"} head={"DEVICE TYPE"} ans={'RASPBERRY PI'} />
                </div>
                <div>
                    <DeviceDetails classdetails={"orange-grad p-3 m-1 text-center rounded-some shadow text-white"} head={"HARDWARE"} ans={props.table1[0]['Hardware']} />
                </div>

                <div>
                    <DeviceDetails classdetails={"green-grad p-3 m-1 text-center rounded-some shadow text-white"} head={"MODEL"} ans={props.table1[0]['Model']} />
                </div>
            </div>
            <div className='d-flex justify-content-around p-1 m-2 rounded shadow-max'>
                <div>
                    <DeviceDetails classdetails={"purple-grad p-3 m-1 text-center rounded-some shadow text-white"} head={"REVISION"} ans={props.table1[0]['Revision']} />
                </div>
                <div>
                    <DeviceDetails classdetails={"orange-grad p-3 m-1 text-center rounded-some shadow text-white"} head={"STATUS"} ans={'ACTIVE'} />
                </div>
                <div>
                    <DeviceDetails classdetails={"blue-grad p-3 m-1 text-center rounded-some shadow text-white"} head={"No of Edge Devices"} ans={3} />
                </div>
            </div>
            <div className='m-2 p-3 rounded'>
                <h1>Edge Devices Connected</h1>
                <Table2 data={props.table2} />
            </div>

            <div className='m-2 p-3 rounded'>
                <h1>Green Grass Devices Connected</h1>                
                <table className='table table-bordered'>
                    <thead className="table-head">
                        <tr>
                            <th>No</th>
                            <th>Green Grass Device</th>
                            <th>Status</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>jhgvhgfvtr67ugfr567uh</td>
                            <td>Healthy</td>
                            <td>12:01:2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>






        </div>
    )
}
