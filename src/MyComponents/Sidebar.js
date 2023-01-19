import React from 'react'
import { SideButton } from '../MyComponents/smallComponents/SideButton'

export const Sidebar = () => {
    return (
        <div className="sidebar sidebar-color col-2 p-0 ps-0 m-0 rounded-right shadow-max pt-2"> 
            <div id='menu'>Menu</div>           
            <SideButton icon={"home-side.png"} iconh={18} iconw={18} classname={"main-icon sidebutton sidebutton-color  p-2 d-flex justify-content-start align-items-center border-bottom"} id={'dashboard-btn'} name={'Dashboard'} path={'/'} />
            <SideButton icon={"edge-side.png"} iconh={17} iconw={17} classname={"sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'edgedevice-btn'} name={'Edge Gateway'} path={'/edge'} />
            <SideButton icon={"mcu.png"} iconh={17} iconw={17} classname={"sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'ggdevice-btn'} name={'Edge Devices'} path={'/leave'} />
            <SideButton icon={"gg-side.webp"} iconh={17} iconw={17} classname={"sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'ggdevice-btn'} name={'GG Devices'} path={'/greengrass'} />
            <br></br>
            <SideButton icon={"users.png"} iconh={18} iconw={18} classname={"user-icon sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'usermngmt-btn'} name={'User Management'} path={'/usermanagement'} />
        </div>
        
    )
}