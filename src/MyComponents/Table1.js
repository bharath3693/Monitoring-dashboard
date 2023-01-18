import React from "react";
import { Link } from "react-router-dom";


export const Table1 = (props) => {
  return (
      <table className="table table-bordered">
        <thead className="table-head">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Edge Device Name</th>           
            <th scope="col">Status</th>                      
            <th scope="col">Leaving Devices</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((d, index) => {
            console.log(d)
            return (             
              <tr>
                <th scope="row">{index + 1}</th>
                <td><Link className="text-decoration-none" to={"/edge/device"}><b>{d['Edge_Gateway_Id']}</b></Link></td>                                              
                <td>{d['Hardware']}</td>
                <td>3</td>
              </tr>             
            );
          })}
        </tbody>
      </table>    
  );
};
