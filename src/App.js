import "./stylesheets/App.css";
import "./stylesheets/custom_styles.css";
import "./stylesheets/count.css";
import "./stylesheets/colors.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./MyComponents/Sidebar";
import { Home } from "./MyComponents/Home";
import { EdgeDevicePage } from "./MyComponents/EdgeDevicePage";
import { EdgeDeviceDetails } from "./MyComponents/EdgeDeviceDetails";
import { Navbar } from "./MyComponents/Navbar";
import { LeavingDevicePage } from "./MyComponents/LeavingDevicePage";
// import { fetchData } from "./Functions/AWSFunctions";

function App() {

  const [table1_data, set_table1] = useState([]);
  const [table2_data, set_table2] = useState([]);
  const [table3_data, set_table3] = useState([]);


  const fetchData1 = () => {
    return fetch("/s3data")
      .then((response) => response.json())
      .then((data) => {
        set_table1(data['Items in table']);
        console.log(data['Items in table'])
      });
  }

  const fetchData2 = () => {
    return fetch("/openmv")
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

  const edge_gateway = [{
    "Edge_Gateway_Id": "000000006c04582a",
    "Hardware": "BCM2835",
    "Revision": "a020d3",
    "Model": "Raspberry Pi 3 Model B Plus Rev 1.3"
  }];

  const edge_devices = [
    {
      "Device": "OpenMV",
      "Board ID": "3736323730315112001F0026",
      "Board Type": "H7",
      "Board Architecture": "OMV4P H7 32768 SDRAM",
      "Hardware Version": "4.3.3",
      "Model_Name": "Blister",
      "Model_Type": "Imageclassification",
      "Model_Version": "1.0.0",
      "Status": "Inactive",
      "Edge_Gateway_ID": "1234567887654321"
    },
    {
      "Device": "OpenMV",
      "Board ID": "3736323730315112001F0026",
      "Board Type": "H7",
      "Board Architecture": "OMV4P H7 32768 SDRAM",
      "Hardware Version": "4.3.3",
      "Model_Name": "Blister",
      "Model_Type": "Imageclassification",
      "Model_Version": "1.0.0",
      "Status": "Inactive",
      "Edge_Gateway_ID": "1234567887654321"
    },
    {
      "Device": "OpenMV",
      "Board ID": "3736323730315112001F0026",
      "Board Type": "H7",
      "Board Architecture": "OMV4P H7 32768 SDRAM",
      "Hardware Version": "4.3.3",
      "Model_Name": "Blister",
      "Model_Type": "Imageclassification",
      "Model_Version": "1.0.0",
      "Status": "Inactive",
      "Edge_Gateway_ID": "1234567887654321"
    }
  ]


  useEffect(() => {
    // fetchData("openmvdb");  
    // fetch(`https://3uskrwhsi7.execute-api.us-east-1.amazonaws.com/prod/ui-to-db?table=s3data`, {mode: 'no-cors'})
    // .then((res) => console.log(res))
    // fetchData("openmvdb");  
    // fetchData1();
    // fetchData2();
    fetchData3();
    set_table1(edge_gateway)
    set_table2(edge_devices);



  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <div className="row p-0 m-0">
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home table1={table1_data} table2={table2_data} table3={table3_data} />} />
            <Route exact path='/edge' element={<EdgeDevicePage table1={table1_data} />} />
            <Route exact path='/edge/device' element={<EdgeDeviceDetails table1={table1_data} table2={table2_data} />} />
            <Route exact path='/edge/device/leave' element={<LeavingDevicePage data={table2_data} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
