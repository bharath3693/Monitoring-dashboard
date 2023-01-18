import React from 'react'
//import { CountDevices } from './smallComponents/CountDevices'
import { DeviceDetails } from './smallComponents/DeviceDetails'
import { Table2 } from './Table2'



export const EdgeDeviceDetails = (props) => {


    return (
        <div className='col-10 m-0 p-0'>
            <h1 className='p-3 box-color m-2 rounded shadow-max text-dark'>{props.table1[0]['Edge_Gateway_Id']}</h1>
            <div className='flex-container p-1 m-2 rounded shadow-max box-color shadow-max'>             
                <div>
                    <DeviceDetails classdetails={"blue-grad p-2 rounded-some shadow text-white"} head={"HARDWARE"} ans={props.table1[0]['Hardware']} />
                </div>
                <div>
                    <DeviceDetails classdetails={"orange-grad p-2 rounded-some shadow text-white"} head={"REVISION"} ans={props.table1[0]['Revision']} />
                </div>
                <div>
                    <DeviceDetails classdetails={"purple-grad p-2 rounded-some shadow text-white"} head={"MODEL"} ans={props.table1[0]['Model']} />
                </div>
            </div>
            <div className='m-2 p-3 rounded'>
                <h1>Edge Devices Connected</h1>
                <Table2 data={props.table2} />
            </div>


           



        </div>
    )
}
