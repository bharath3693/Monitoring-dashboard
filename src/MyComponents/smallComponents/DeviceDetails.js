import React from 'react'

export const DeviceDetails = (props) => {
  return (
    
        <div className={props.classdetails}>
            <h6 className="text-dark"><b> {props.head}</b></h6>
            <hr className='m-1'></hr>            
            <h6 className="text-dark">{props.ans}</h6>
        </div>
    
  )
}
