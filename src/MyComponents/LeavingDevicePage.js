import React from 'react'
import { DeviceDetails } from './smallComponents/DeviceDetails'
import { Table2 } from './Table2'

export const LeavingDevicePage = (props) => {
    return (
        <div className='col-10 m-0 p-0'>
            <h1 className='p-3 bg-dark text-white m-2 rounded shadow-max'>{props.data[0]['Board ID']}</h1>            
            <div className='m-2 p-3 rounded'>
            <h1 className='p-3 m-1 rounded shadow-max'>Device Details</h1>
            <table className='table table-bordered'>
                <tbody>
                    {Object.keys(props.data[0]).map((key, index) => {
                        return (
                            <tr>
                                <th>{key}</th>
                                <td>{props.data[0][key]}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            </div>

        </div>
    )
}
