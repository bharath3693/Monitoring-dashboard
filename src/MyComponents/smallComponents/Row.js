import React from 'react'
import { Table, TableBody, TableHead, TableRow, TableCell, IconButton, Collapse, Box, Typography, } from '@mui/material'
import {KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material'
export const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' }}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowDown/> : <KeyboardArrowRight/> }
                    </IconButton>
                </TableCell>
                <TableCell scope="row"  align="center" >
                   {props.index+1}
                </TableCell>
                <TableCell align="center">{row['Device']}</TableCell>
                <TableCell  align="center">{row['Status']}</TableCell>                
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Table size="small">
                            <TableBody>
                                {Object.keys(row).map((key, index)=> {
                                    return (
                                        <TableRow>
                                        <TableCell sx={{fontSize:12}} >{key}</TableCell>
                                        <TableCell sx={{fontSize:12}}>{row[key]} </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
