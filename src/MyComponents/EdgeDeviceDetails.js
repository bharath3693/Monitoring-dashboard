import React from 'react'
//import { CountDevices } from './smallComponents/CountDevices'
import { DeviceDetails } from './smallComponents/DeviceDetails'
import { Table2 } from './Table2'



export const EdgeDeviceDetails = (props) => {


    return (
        <div className='col-10 m-0 p-0'>
            <h1 className='p-3 box-color text-white m-2 rounded shadow-max'>Device Name</h1>
            <div className='flex-container p-1 m-2 rounded shadow-max box-color shadow-max'>
                <div>
                    <DeviceDetails classdetails={"green-grad p-2 rounded-some shadow text-white"} head={"ID"} ans={"12345434"} />
                </div>
                <div>
                    <DeviceDetails classdetails={"blue-grad p-2 rounded-some shadow text-white"} head={"VERSION"} ans={"1.2.2"} />
                </div>
                <div>
                    <DeviceDetails classdetails={"orange-grad p-2 rounded-some shadow text-white"} head={"MODEL"} ans={"H5"} />
                </div>
                <div>
                    <DeviceDetails classdetails={"purple-grad p-2 rounded-some shadow text-white"} head={"BUS"} ans={"4"} />
                </div>
            </div>
            <div className='m-2 p-3 box-color rounded'>
                <Table2 data={props.table2} />
            </div>


           



        </div>
    )
}
