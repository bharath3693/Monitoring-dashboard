<Router>
  <Navbar />
  <div className="row p-0 m-0">
    <div id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <button type="button" class="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
          <span class="hamb-top"></span>
          <span class="hamb-middle"></span>
          <span class="hamb-bottom"></span>
        </button>
        <Routes>
          <Route exact path='/' element={<Home table1={table1_data} table2={table2_data} />} />
          <Route exact path='/edge' element={<EdgeDevicePage table1={table1_data} />} />
          <Route exact path='/edge/device' element={<EdgeDeviceDetails table2={table2_data} />} />
        </Routes>
      </div>
    </div>
  </div>
</Router>




{/* <div className='row w-100 text-center p-2'>
                <div className='col-2'>
                    <img alt="logoman" src='https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/512/external-dashboard-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev.png' height={50} width={50}></img>
                </div>
                <div className='col-10 text-white mt-2'>
                    <h6>TINY ML DASHBOARD</h6>
                </div>
            </div>
            <hr className='mb-1'></hr> */}
{/* <h3 className='text-white roboto ms-2'>Menu</h3> */ }




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





          {/* <div className="d-flex justify-content-evenly p-2 rounded">
                <div className="text-white m-1 rounded w-50 shadow-max bg-white">
                    <h4 className='text-center text-success p-2 bg-white m-0 rounded-top text-uppercase text-size'>Edge Device types</h4>
                   
                    <ParentSize>{({ width }) => <Example bpie={true} bdou={true} doughnutcolor={getDoughnutColor} colorfunction={getDeviceColor} piedata={heredata} width={width} height={250} />}</ParentSize>
                </div>
                <div className="box-color text-white p-0 m-1 rounded w-50 shadow-max">
                    <h4 className='text-center text-success p-2 bg-white m-0 rounded-top text-uppercase text-size'>Leaving Device types</h4>
                   
                    <ParentSize>{({ width }) => <Example bpie={false} bdou={true} doughnutcolor={getDeviceColor} colorfunction={getDeviceColor} piedata={heredata} width={width} height={250} />}</ParentSize>
                </div>
            </div> */}


             {/* <Navbar />                 */}
            {/* <svg width={200} height={200}>
                <GradientPinkBlue id="visx-pie-gradient2" />
                <rect rx={14} width={100} height={100} fill="url('#visx-pie-gradient2')" />
            </svg> */}




            // TABLES IN HOMEPAGE

 {/* <div className="flex-container p-3">
                <div className="m-1 bg-danger bg-gradient rounded p-1 rounded shadow">
                    <Table1 data={props.table1} />
                </div>
                <div className="m-1 bg-success bg-gradient rounded p-1 rounded shadow">
                    <Table2 data={props.table2} />
                </div>

            </div> */}

            {/* <table className="mx-2">
                <thead>
                    <tr>
                        <td className="bg-danger bg-gradient rounded p-4 rounded shadow">
                            <h4>Edge Devices</h4>
                            <hr></hr>
                            <Link to={"/edge"}>
                            <Table1 data={props.table1} />
                            </Link>
                            
                            
                            
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="2" className="bg-primary bg-gradient p-2 rounded shadow">
                            <h4>Leaving Devices</h4>
                            <hr></hr>
                            <Table2 data={props.table2} />
                        </td>
                    </tr>
                </thead>
            </table> */}            