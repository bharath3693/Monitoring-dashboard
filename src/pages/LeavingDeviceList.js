import React from 'react'
import { Sidebar } from '../MyComponents/Sidebar'
import { CountDevices } from '../MyComponents/smallComponents/CountDevices'
import { Table2 } from '../MyComponents/Table2'

export const LeavingDeviceList = (props) => {
  return (
    <>      
      <div className="row p-0 m-0">
        <Sidebar />        
        <div className="col-10 p-0 m-0 pt-3">
          <b className='big-font p-3 ms-1 text-uppercase'>Edge Nodes Home Page</b>
          <div className='row p-3'>
            <div className='col-4'>
              {/* <CountDevices link={"https://www.shutterstock.com/image-vector/edge-computing-concept-2-colored-260nw-1218102001.jpg"} bg={"red-grad-tl text-info m-1 rounded shadow-max"} name={'Number of Edge Gateways'} count={1} />           */}
              <CountDevices link={"https://img.icons8.com/external-nawicon-glyph-nawicon/64/228BE6/external-cloud-computing-internet-of-things-nawicon-glyph-nawicon.png"} bg={"flex-stretch count-box m-1 rounded shadow-max"} name={'Number of Edge Nodes'} count={props.data.length} />
            </div>
          </div>
          <div className='row p-4'>
            <div className='rounded p-4 rounded shadow-max'>
              <b className='big-font text-uppercase'>Edge Nodes</b>
              <Table2 data={props.data} />
              {/* <table className='table table-bordered'>
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
              {props.data.map((d, index) => {
                return (
                  <tr>
                    <td>{index+1}</td>
                    <td><Link to={"/edge/device/leave"}>{d['Device']}</Link></td>

                    <td>{d['Board_Type']}</td>
                    <td>{d['Status']}</td>
                    <td>{d['Edge_Gateway_ID']}</td>
                    <td>{d['Last_Updated']}</td>
                  </tr>

                )
              })}
             
            </tbody>
          </table> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
