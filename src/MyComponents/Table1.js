import React from "react";
import { Link } from "react-router-dom";


export const Table1 = (props) => {
  return (
      <table className="table table-bordered">        
        <thead className="table-head">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Edge Device ID</th>           
            <th scope="col">Device Type</th>           
            <th scope="col">Status</th>                      
            <th scope="col">Edge Devices count</th>
            <th scope="col">Edge Devices Connected</th>           
            <th scope="col">Greengrass Device Connected</th>           

          </tr>
        </thead>
        <tbody>
          {props.data.map((d, index) => {           
            return (             
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td><Link className="text-decoration-none" to={`/edgegateway/${d['Edge_Gateway_Id']}`}><b>{d['Edge_Gateway_Id']}</b></Link></td>                                              
                <td>{d['Device_Type']}</td>
                <td>Active</td>
                <td>3</td>
                <td>kjhbgvc</td>
                <td>jhbgvhgvbnhgbv</td>
              </tr>             
            );
          })}
        </tbody>
      </table>    
  );
};
