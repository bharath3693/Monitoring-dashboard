import React from 'react'
// import { Link } from 'react-router-dom'
import { SideButton } from '../MyComponents/smallComponents/SideButton'
// import { Home } from './Home'
// import { CountDevices } from './smallComponents/CountDevices'
// import { SideButton } from "./smallComponents/SideButton"

export const Sidebar = () => {
    return (
        <div className="col-2 p-0 m-0 rounded-right sidebar-color shadow-max pt-2 sidebar">
            {/* <div className='row w-100 text-center p-2'>
                <div className='col-2'>
                    <img alt="logoman" src='https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/512/external-dashboard-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev.png' height={50} width={50}></img>
                </div>
                <div className='col-10 text-white mt-2'>
                    <h6>TINY ML DASHBOARD</h6>
                </div>
            </div>
            <hr className='mb-1'></hr> */}
            {/* <h3 className='text-white roboto ms-2'>Menu</h3> */}
            <SideButton icon={"https://img.icons8.com/office/512/home-page.png"} iconh={18} iconw={18} classname={"btn btn-lg btn-block text-white"} id={'dashboard-btn'} name={'Dashboard'} path={'/'} />
            <SideButton icon={"data:image/png;base64,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"} iconh={17} iconw={17} classname={"btn btn-md btn-block text-white"} id={'edgedevice-btn'} name={'Edge Devices'} path={'/edge'} />
            <SideButton icon={"https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_120,h_120/https://dashboard.snapcraft.io/site_media/appmedia/2020/05/AWS-IoT-Greengrass4x.png"} iconh={17} iconw={17} classname={"btn btn-md btn-block text-white"} id={'ggdevice-btn'} name={'Green Grass Devices'} path={'/edge'} />
        </div>
        // <div>
        //     <div className="overlay"></div>
        //         <nav className="navbar navbar-inverse fixed-top shadow-max" id="sidebar-wrapper" role="navigation">
        //             <ul className="nav sidebar-nav">
        //                 <div className="sidebar-header">
        //                     <div className="sidebar-brand">
        //                         <a href="/">Menu</a>
        //                     </div>
        //                 </div>

        //                 <li>
        //                     <Link to="/">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/edge">Edge Devices</Link>
        //                 </li>
        //                 {/* <li><a href="/edge">Edge Devices</a></li> */}
        //             </ul>


        //         </nav>

        // </div>
    )
}