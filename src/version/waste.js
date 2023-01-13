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