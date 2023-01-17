import React from 'react'
import { Link } from 'react-router-dom'

export const SideButton = (props) => {
  return (
    <div className='sidebutton sidebutton-color' id={props.id}>
      <img alt="sidebutton icon" src={props.icon} height={props.iconh} widht={props.iconw}></img>
      <Link to={props.path}><button className={props.classname}>{props.name}</button></Link>
    </div>
  )
}
