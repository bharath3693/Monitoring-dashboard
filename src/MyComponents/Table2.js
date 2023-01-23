import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
import { Row } from './smallComponents/Row'


export const Table2 = (props) => {


  return (
    <TableContainer sx={{ border: 1 }} >
      <Table>
        <TableHead>
          <TableRow >
            <TableCell />
            <TableCell align="center"> No</TableCell>
            <TableCell align="center">Edge Device</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((d, index) => {
            return (              
              <Row index={index} key={index} row={d} />
            )
          })}                           
        </TableBody>
      </Table>
    </TableContainer>
    // <table className="table table-bordered">          
    //   <thead className="table-head">
    //     <tr key='head'>
    //       <th scope="col">No</th>
    //       <th scope="col">Edge Device Name</th>          
    //       <th scope="col">Status</th>          
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {props.data.map((d, index) => {
    //       return (
    //         <tr key={index}>
    //           <th scope="row">{index + 1}</th>
    //           <td><Link to={"/edge/device/leave"}> <button className="btn btn-sm bt-info" >{d['Device']}</button></Link> </td>              
    //           <td>{d['Status']}</td>              
    //         </tr>

    //       );
    //     })}
    //   </tbody>
    // </table>
  );
};
