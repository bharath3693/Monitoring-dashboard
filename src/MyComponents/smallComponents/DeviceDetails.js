import React from 'react'

export const DeviceDetails = (props) => {
  return (
    
        <div className={props.classdetails}>
            <h3 className="fontstyle">{props.head}</h3>            
            <p className="fontstyle">{props.ans}</p>
        </div>
    
  )
}
