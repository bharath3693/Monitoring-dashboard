import React from 'react'
import { CountDevices } from './smallComponents/CountDevices'
import { Table1 } from './Table1'

export const EdgeGatewayList = (props) => {
  console.log(props.table1)
  return (    
    <div className="col-10 p-0 m-0 pt-4">
      <b className='big-font p-3 ms-1 text-uppercase'>Edge Gateway Home Page</b>      
      <div className='row p-3'>
        <div className='col-4'>        
          {/* <CountDevices link={"https://www.shutterstock.com/image-vector/edge-computing-concept-2-colored-260nw-1218102001.jpg"} bg={"red-grad-tl text-info m-1 rounded shadow-max"} name={'Number of Edge Gateways'} count={1} />           */}
          <CountDevices link={"https://img.icons8.com/external-nawicon-glyph-nawicon/64/228BE6/external-cloud-computing-internet-of-things-nawicon-glyph-nawicon.png"} bg={"flex-stretch count-box m-1 rounded shadow-max"} name={'Number of Edge Gateways'} count={1} />
        </div>
      </div>
      <div className='row p-4'>
        <div className='rounded p-4 rounded shadow-max'>
          <b className='text-uppercase big-font'>Edge Gateway Devices</b>
          <Table1 data={props.table1} />
        </div>
      </div>
    </div>
  )
}

