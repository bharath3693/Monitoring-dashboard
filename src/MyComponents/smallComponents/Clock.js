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
        <span className='clock'>           
            <b className='mt-2 m-0'>{date.toDateString()}</b>
        </span>
    )
}
