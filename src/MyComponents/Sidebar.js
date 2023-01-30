import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
import { Collapse, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { SideButton } from '../MyComponents/smallComponents/SideButton'

export const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="sidebar sidebar-color col-2 p-0 ps-0 m-0 rounded-right shadow-max pt-2">
            <div id='menu'>Menu</div>
            <div className='d-flex border-bottom'>
                <SideButton icon={"home-side.png"} iconh={18} iconw={18} classname={"big-font sidebutton sidebutton-color  p-2 d-flex justify-content-start align-items-center"} id={'dashboard-btn'} name={'Monitoring'} path={'/dashboard'} />
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} >
                    {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                </IconButton>
            </div>
            <Collapse in={open} unmountOnExit>
                <SideButton icon={"edge-side.png"} iconh={17} iconw={17} classname={"sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'edgedevice-btn'} name={'Edge Gateway'} path={'/edgegateway'} />
                <SideButton icon={"mcu.png"} iconh={17} iconw={17} classname={"sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'ggdevice-btn'} name={'Edge Nodes'} path={'/edgedevice'} />
                <SideButton icon={"gg-side.webp"} iconh={17} iconw={17} classname={"sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'ggdevice-btn'} name={'GG Devices'} path={'/greengrass'} />
            </Collapse>
            <br></br>
            <SideButton icon={"users.png"} iconh={18} iconw={18} classname={"user-icon sidebutton sidebutton-color p-2 d-flex justify-content-start align-items-center border-bottom"} id={'usermngmt-btn'} name={'User Management'} path={'/usermanagement'} />
        </div>

    )
}