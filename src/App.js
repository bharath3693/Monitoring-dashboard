import "./stylesheets/App.css";
import "./stylesheets/custom_styles.css";
import "./stylesheets/count.css";
import "./stylesheets/colors.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./MyComponents/Sidebar";
import { Home } from "./MyComponents/Home";
import { EdgeGatewayList } from "./MyComponents/EdgeGatewayList";
import { EdgeGatewayDetails } from "./MyComponents/EdgeGatewayDetails";
import { Navbar } from "./MyComponents/Navbar";
import { LeavingDevicePage } from "./MyComponents/LeavingDevicePage";
import { UserManagement } from "./pages/UserManagement";
import { LeavingDeviceList } from "./pages/LeavingDeviceList";
import { GGpage } from "./pages/GGpage";


function App() {

  const [table1_data, set_table1] = useState([]);
  const [table2_data, set_table2] = useState([]);
  const [table3_data, set_table3] = useState([]);  


  const fetchData1 = () => {
    return fetch("/edgegateway")
      .then((response) => response.json())
      .then((data) => {
        set_table1(data['Items in table']);        
      });
  }

  const fetchData2 = () => {
    return fetch("/edgedevices")
      .then((response) => response.json())
      .then((data) => {
        set_table2(data['Items in table']);
      });
  }
  const fetchData3 = () => {
    return fetch("/greengrass")
      .then((response) => response.json())
      .then((data) => {
        set_table3(data['Items in table']);
      });
  }

  useEffect(() => {    
    fetchData1();
    fetchData2();
    fetchData3();    
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <div className="row p-0 m-0">
          <Sidebar />
          <Routes>            
            <Route exact path='/' element={<Home table1={table1_data} table2={table2_data} table3={table3_data} />} />
            <Route exact path='/edgegateway' element={ <EdgeGatewayList table1={table1_data} />}  />
            <Route path='/edgegateway/:device' element={<EdgeGatewayDetails table1={table1_data} table2={table2_data} table3={table3_data} />} />
            <Route exact path='/edge/device/leave' element={<LeavingDevicePage data={table2_data} />} />
            <Route exact path='/usermanagement' element={ <UserManagement/> } />
            <Route exact path='/edgedevice' element={ <LeavingDeviceList data={table2_data}  /> } />          
            <Route exact path='/greengrass' element={ <GGpage data={table3_data}/>  } />             
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
