import React from 'react'

export const CountDevices = (props) => {
  return (
    <div className={props.bg} style={{ height: '10em', width: '14em' }}>
      <h5 className='text-center p-2 bg-white m-0 rounded-top text-uppercase text-size text-success '>{props.name}</h5>
      <div className='p-2'>
      <div className='d-flex flex-column justify-content-around align-items-center p-1 mx-2 transparent-bg'>
        <img className='' src={props.link} height={50} width={50} alt="devicelogo" ></img>              
        <h2 className='m-0 text-white'> {props.count}</h2>
      </div>
      </div>
      {/* <div className='d-flex justify-content-around'>
        <div>
          
        </div>
        <div className='mt-5 ml-2'>
          <img src={props.link} height={60} width={60} alt="devicelogo" ></img>

        </div>
        <div className='mt-4'>
          <h1 className='text-center fs-50'> {props.count} </h1>
          <h6 className='text-center'>{props.name}</h6>
        </div>
      </div> */}
    </div>
  )
}
