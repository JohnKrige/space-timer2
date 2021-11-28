import { useState, useEffect } from 'react';

import SingleTimer from './SingleTimer';
import SetTimerModal from './SetTimerModal';

const Timers = () => {
    const [timers, setTimers] = useState([]);
    const [totalTime, setTotalTime] = useState(300000);
    const [showEdit, setShowEdit] = useState(false);
    const [type, setType] = useState('repeater');
    const [repeatTimes, setRepeatTimes] = useState(3);

    const setTimer = (timeMs) => {
        console.log(timeMs, 'mofo');
    };

    return (
        <div>
            <SetTimerModal onSubmit={setTimer} totalTime={totalTime} show={showEdit}/>
            <SingleTimer duration={totalTime} repeatTimes={repeatTimes} />
        </div>
    );
};

export default Timers;