import { useState, useEffect } from 'react';

import SingleTimer from './SingleTimer';

const Timers = () => {
    const [timers, setTimers] = useState([]);

    useEffect(() => {
        const timer = {
            duration: 65000,
            type: "repeater",
            repeatTimes: 9999,
        };

        setTimers(old => [timer]);
    }, [])

    const timerDisplay = timers.map((timer, i) => {
        return <SingleTimer key={i} duration={timer.duration} repeatTimes={timer.repeatTimes || 0}/>
    })

    return (<div>
        {timerDisplay}
    </div>);
};

export default Timers;