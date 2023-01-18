import React from 'react'
import { SideButton } from '../MyComponents/smallComponents/SideButton'

export const Sidebar = () => {
    return (
        <div className="sidebar sidebar-color col-2 p-0 ps-0 m-0 rounded-right shadow-max pt-2">            
            <SideButton icon={"home-side.png"} iconh={18} iconw={18} classname={"sidebutton sidebutton-color main-icon p-2 d-flex justify-content-start align-items-center main-icon border-bottom"} id={'dashboard-btn'} name={'Dashboard'} path={'/'} />
            <SideButton icon={"edge-side.png"} iconh={17} iconw={17} classname={"sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'edgedevice-btn'} name={'Edge Gateway'} path={'/edge'} />
            <SideButton icon={"gg-side.webp"} iconh={17} iconw={17} classname={"sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'ggdevice-btn'} name={'GG Devices'} path={'/edge'} />
        </div>
        
    )
}