import React from 'react'

export const DeviceDetails = (props) => {
  return (
    
        <div className={props.classdetails} style={{height:100}}>
            <h3 className="fontstyle">{props.head}</h3>            
            <h5 className="fontstyle text-wrap"><b>{props.ans}</b></h5>
        </div>
    
  )
}
