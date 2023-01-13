import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Table2 = (props) => {

  const [show, setShow] = useState(false);
  const [trail, setTrail] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true);
    var i = index;
    console.log(props.data[i]['version'])
    setTrail(String(props.data[i]['machine']));

  };


  return (
    <table className="table">
      {console.log(props.data[0])}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{trail}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <div>
              <h6>Version : 12348765ruijhgfty7uhgfc5</h6>
            </div>
            <div>
              <h6>Model : 12345</h6>
            </div>
            <div>
              <h6>ID : 23453</h6>
            </div>                       
          </div>         
          {/* <table className="bg-dark">
                    <tbody>
                      <tr>
                        <td>Vesrion : sdfg</td>
                        <td>Id: 1234</td>
                      </tr>
                      <tr>
                        <td>Model:2345</td>
                        <td>Bus:12345</td>
                      </tr>
                    </tbody>
                  </table> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Leaving Device Name</th>
          <th scope="col">Version</th>
          <th scope="col">Status</th>
          <th scope="col">Unique ID</th>
          <th scope="col">Connected Edge Device</th>
          <th scope="col">Release</th>
          <th scope="col">Machine</th>
          <th scope="col">Node Name</th>
          <th scope="col">System Name</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((d, index) => {
          return (
            <tr>
              <th scope="row">{index + 1}</th>
              <td> <Button variant="primary" className="btn btn-sm blue-grad" onClick={() => handleShow(index)} >Leaving Device Name </Button> </td>
              <td>{d["version"]}</td>
              <td>NA</td>
              <td>NA</td>
              <td>NA</td>
              <td>{d["release"]}</td>
              <td>{d["machine"]}</td>
              <td>{d["nodename"]}</td>
              <td>{d["sysname"]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
