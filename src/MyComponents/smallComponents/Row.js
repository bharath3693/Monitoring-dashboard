import React from 'react'
import { Table, TableBody, TableRow, TableCell, IconButton, Collapse } from '@mui/material'
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material'

export const Row = (props) => {
    // const order = [4, 1, 0, 8, 10, 6, 9, 2, 5, 7];
    const order = ['Board_ID', 'Device', 'Hardware_Version', 'Board_Type', 'Board_Architecture', 'Edge_Gateway_ID', 'Model_Name', 'Model_Type', 'Model_Version', 'Status', 'Last_Updated', "MCU_Location"];
    console.log(props)
    const { row } = props;
    function setChanges() {
        setOpen(!open)
        if (colour === '#99bdf7') {
            setColour('')
        }
        else {
            setColour('#99bdf7')
        }
    }
    const [open, setOpen] = React.useState(false);
    const [colour, setColour] = React.useState('');
    return (
        <>
            <TableRow sx={{ backgroundColor: colour, '& > *': { borderBottom: 'unset' }, cursor: 'pointer' }} onClick={() => setChanges()}>
                <TableCell style={{ backgroundColor: colour }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setChanges()}
                    >
                        {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                    </IconButton>
                </TableCell>
                <TableCell style={{ backgroundColor: colour }} scope="row" align="center">
                    {props.index + 1}
                </TableCell>
                <TableCell align="center" style={{ backgroundColor: colour }}>{row['Board_ID']}</TableCell>
                <TableCell align="center" style={{ backgroundColor: colour }}>{row['Device']}</TableCell>
                <TableCell align="center" style={{ backgroundColor: colour }}>{row['Status']}</TableCell>
                <TableCell align="center" style={{ backgroundColor: colour }}>{row['Edge_Gateway_ID']}</TableCell>
                <TableCell align="center" style={{ backgroundColor: colour }}>{row['Last_Updated']}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Table>
                            <TableBody>
                                {Object.keys(row).map((key, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell sx={{ fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' }} >{order[index]}</TableCell>
                                            <TableCell sx={{ fontSize: 12 }}>{row[order[index]]} </TableCell>
                                        </TableRow>
                                    )
                                })}
                                {/* {Object.keys(row).map((key, index)=> {                                    
                                    return (
                                        <TableRow>
                                        <TableCell sx={{fontSize:12, fontWeight:'bold', textTransform:'uppercase'}} >{key}</TableCell>
                                        <TableCell sx={{fontSize:12}}>{row[key]} </TableCell>
                                        </TableRow>
                                    )
                                })} */}
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}
