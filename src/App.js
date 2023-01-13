import "./stylesheets/App.css";
import "./stylesheets/custom_styles.css"
import "./stylesheets/count.css"
import "./stylesheets/colors.css"
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./MyComponents/Sidebar";
import { Home } from "./MyComponents/Home";
import { EdgeDevicePage } from "./MyComponents/EdgeDevicePage"
import { fetchData } from "./Functions/AWSFunctions";
import { EdgeDeviceDetails } from "./MyComponents/EdgeDeviceDetails";
import { Navbar } from "./MyComponents/Navbar";

function App() {
  console.log("yoman");
  const [table1_data, set_table1] = useState([]);
  const [table2_data, set_table2] = useState([]);
  const [table3_data, set_table3] = useState([]);

  async function fetchData1() {
    let x = await fetchData("s3data");        
    set_table1(x);
    
  }
  async function fetchData2() {
    let x = await fetchData("openmvdb");
    set_table2(x);
    
  }
  async function fetchData3() {
    let x = await fetchData("greengrasscount");     
    set_table3(x)    
  }

  useEffect(() => {
    fetchData1();
    fetchData2();
    fetchData3();
  }, []);


  // const [values, setData] = useState({
  //   datas: [{'version': {'S': '1'}, 'id': {'S': '2'}, 'Name': {'S': 'nihar'}, 'age': {'S': '12'}}, {'version': {'S': '2'}, 'id': {'S': '1'}, 'Name': {'S': 'sujith'}, 'age': {'S': '10'}}, {'version': {'S': '1'}, 'id': {'S': '3'}, 'Name': {'S': 'vin'}, 'age': {'S': '11'}}],
  // });

  // const [clicked1, setClick1] = useState(0);
  // const [clicked2, setClick2] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        {/* <div className="row">
          <h1>jhgfcx</h1>
          {table3_data.map((d)=>{
          return (
            <>{d.status}</>
          )
        })}
        </div> */}
        <div className="row p-0 m-0">
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home table1={table1_data} table2={table2_data} table3={table3_data} />} />
            <Route exact path='/edge' element={<EdgeDevicePage table1={table1_data} />} />
            <Route exact path='/edge/device' element={<EdgeDeviceDetails table2={table2_data} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
