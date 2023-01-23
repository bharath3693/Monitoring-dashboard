import React from 'react'
import {TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
import { Row } from './smallComponents/Row'


export const CollapsibleTable = () => {
  return (
    <TableContainer >
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
          {/* {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
          <Row key={'bo'} row={'asd'}/>
          <Row key={'bo'} row={'asd'}/>

        </TableBody>
      </Table>
    </TableContainer>
  )
}
