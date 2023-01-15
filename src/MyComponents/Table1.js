import React from "react";
import { Link } from "react-router-dom";


export const Table1 = (props) => {
  return (
      <table className="table table-bordered ">
        <thead className="">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Edge Device Name</th>
            <th scope="col">Version</th>
            <th scope="col">Status</th>
            <th scope="col">Tag</th>
            <th scope="col">ID</th>
            <th scope="col">Device</th>
            <th scope="col">Bus</th>
            <th scope="col">Model</th>
            <th scope="col">Leaving Devices</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((d, index) => {
            console.log(d)
            return (
             
              <tr>
                <th scope="row">{index + 1}</th>
                <td><Link className="text-decoration-none" to={"/edge/device"}><b>Device Name</b></Link></td>
                <td>NA</td>
                <td>NA</td>
                <td>{d["tag"]}</td>
                <td>{d["id"]}</td>
                <td>{d["device"]}</td>
                <td>{d["bus"]}</td>
                <td>NA</td>
                <td>NA</td>
              </tr>             
            );
          })}
        </tbody>
      </table>    
  );
};
