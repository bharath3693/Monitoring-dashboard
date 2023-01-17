import React from 'react'
import { SideButton } from '../MyComponents/smallComponents/SideButton'

export const Sidebar = () => {
    return (
        <div className="col-2 p-0 ps-2 m-0 rounded-right sidebar-color shadow-max pt-2 sidebar">            
            <SideButton icon={"home-side.png"} iconh={18} iconw={18} classname={`my-1 yoman btn btn-lg btn-block text-white`} id={'dashboard-btn'} name={'Dashboard'} path={'/'} />
            <SideButton icon={"edge-side.png"} iconh={17} iconw={17} classname={"my-1 btn btn-sm btn-block text-white"} id={'edgedevice-btn'} name={'Edge Devices'} path={'/edge'} />
            <SideButton icon={"gg-side.webp"} iconh={17} iconw={17} classname={"my-1 btn btn-sm btn-block text-white"} id={'ggdevice-btn'} name={'Green Grass Devices'} path={'/edge'} />
        </div>
        
    )
}