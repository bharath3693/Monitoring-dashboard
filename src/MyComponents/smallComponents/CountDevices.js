import React from 'react'

export const CountDevices = (props) => {
  return (

    <div className={props.bg}> 
      <p className='count-head text-center p-2 m-0 rounded-top text-uppercase text-size text-bold shadow-lite'>{props.name}</p>
      <div className='count-body d-flex flex-column align-items-center justify-content-center p-2 rounded'>
        <img className='' src={props.link} height={50} width={50} alt="devicelogo" ></img>
        <p id="count-count" className='m-0'> {props.count}</p>
      </div>    
      </div>


    // <div className={props.bg} style={{ height: '10em'}}> 
    // <p className='text-center p-2 bg-white m-0 rounded-top text-uppercase text-size text-success '>{props.name}</p>
    // <div className='d-flex align-items-center justify-content-center p-2'>
    //   <img className='mx-2' src={props.link} height={80} width={80} alt="devicelogo" ></img>
    //   <h1 className='mx-2 text-white count-font'> {props.count}</h1>
    // </div>    
    // </div>
      
    // <div className={props.bg} style={{ height: '10em', width: '14em' }}>
    //   <h5 className='text-center p-2 bg-white m-0 rounded-top text-uppercase text-size text-success '>{props.name}</h5>
    //   <div className='p-2'>
    //     <div className='d-flex flex-column justify-content-around align-items-center p-1 mx-2 transparent-bg'>
    //       <img className='' src={props.link} height={50} width={50} alt="devicelogo" ></img>
    //       <h2 className='m-0 text-white'> {props.count}</h2>
    //     </div>
    //   </div>
    // </div>


    // <div className={props.bg} style={{ height: '10em', width: '14em' }}>
    //   <h5 className='text-center p-2 bg-white m-0 rounded-top text-uppercase text-size text-success '>{props.name}</h5>
    //   <div className='p-2'>
    //   <div className='d-flex flex-column justify-content-around align-items-center p-1 mx-2 transparent-bg'>
    //     <img className='' src={props.link} height={50} width={50} alt="devicelogo" ></img>              
    //     <h2 className='m-0 text-white'> {props.count}</h2>
    //   </div>
    //   </div>
    // </div>         
  )
}


