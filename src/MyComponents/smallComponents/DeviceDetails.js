import React from 'react'

export const DeviceDetails = (props) => {
  return (
    
        <div className={props.classdetails} style={{height:115}}>
            <h6 className="fontstyle text-dark"> {props.head}</h6>
            <hr className='m-1'></hr>            
            <h6 className="fontstyle flex-wrap text-dark">{props.ans}</h6>
        </div>
    
  )
}
