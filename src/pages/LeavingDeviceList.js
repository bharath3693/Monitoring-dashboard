import React from 'react'
import { Link } from 'react-router-dom'
import { CountDevices } from '../MyComponents/smallComponents/CountDevices'

export const LeavingDeviceList = () => {
  return (
    <div className="col-10 p-0 m-0">
    <h1 className='p-3'>Edge Devices Home Page</h1>
    <div className='row p-3'>
      <div className='col-4'>        
        {/* <CountDevices link={"https://www.shutterstock.com/image-vector/edge-computing-concept-2-colored-260nw-1218102001.jpg"} bg={"red-grad-tl text-info m-1 rounded shadow-max"} name={'Number of Edge Gateways'} count={1} />           */}
        <CountDevices link={"https://img.icons8.com/external-nawicon-glyph-nawicon/64/228BE6/external-cloud-computing-internet-of-things-nawicon-glyph-nawicon.png"} bg={"flex-stretch count-box m-1 rounded shadow-max"} name={'Number of Edge Devices'} count={1} />
      </div>
    </div>
    <div className='row p-4'>
      <div className='rounded p-4 rounded shadow-max'>
        <h2>Edge Gateway Devices</h2>
        <table className='table table-bordered'>
            <thead className='table-head'> 
            <tr>
                <th>No</th>
                <th>Edge Devices ID</th>
                <th>Device Type</th>
                <th>Status</th>
                <th>Edge Gateway Connected</th>
                <th>Last Modified</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><Link to={"/edge/device/leave"}>8765876</Link></td>
                     
                    <td>MCU</td>
                    <td>INACTIVE</td>
                    <td>98765RDFGYUIOJH</td>
                    <td>12/03/2023</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><Link to={"/edge/device/leave"}>8765876</Link></td>
                    <td>MCU</td>
                    <td>INACTIVE</td>
                    <td>98765RDFGYUIOJH</td>
                    <td>12/03/2023</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
