import React from 'react'
import { Link } from 'react-router-dom'

export const SideButton = (props) => {
  return (
    <div className={props.classname} id={props.id}>
      <img className='mx-1' alt="sidebutton icon" src={props.icon} height={props.iconh} widht={props.iconw}></img>
      <Link className='mx-1 text-dark text-bold text-decoration-none w-100 text-uppercase' to={props.path}>{props.name}</Link>
    </div>
  )
}
