import { Button, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Table1 = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <table className="table table-bordered table-striped">
      <thead className="table-head">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Edge Gateway ID</th>
          <th scope="col">Device Type</th>
          <th scope="col">Status</th>
          <th scope="col">Edge Nodes count</th>
          <th scope="col">Edge Nodes Connected</th>
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
              <td>
                
                <Button sx={{fontSize:'12px'}} aria-describedby={id} variant="contained" onClick={handleClick}>
                  Nodes connected
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>1234567 <br></br>
                  7654321</Typography>
                </Popover>
              </td>
              <td>123456787654</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
