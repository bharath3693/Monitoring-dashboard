import React, { useState, useEffect } from 'react'

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        setInterval(refreshClock, 1000);
        
    }, []);

    return (
        <span className='text-white'>
            {/* {date.toLocaleString()}              */}
            <p className='font-small mt-2 m-0' >{date.toDateString()}</p>
        </span>
    )
}
