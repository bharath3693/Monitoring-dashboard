import React from 'react'

export const DeviceDetails = (props) => {
  return (
    
        <div className={props.classdetails} style={{height:100}}>
            <h3 className="fontstyle">{props.head}</h3>            
            <p className="fontstyle"><b>{props.ans}</b></p>
        </div>
    
  )
}
