import { useState, useEffect } from 'react';

import SingleTimer from './SingleTimer';
import SetTimerModal from './setTimerModal';

const Timers = () => {
    const [timers, setTimers] = useState([]);
    const [totalTime, setTotalTime] = useState(300000);

    useEffect(() => {
        const timer = {
            duration: totalTime,
            type: "repeater",
            repeatTimes: 9999,
        };

        setTimers(old => [timer]);
    }, [])

    const timerDisplay = timers.map((timer, i) => {
        return <SingleTimer key={i} duration={timer.duration} repeatTimes={timer.repeatTimes || 0} />
    });

    return (
        <div>
            <SetTimerModal />
            {timerDisplay}
        </div>
    );
};

export default Timers;