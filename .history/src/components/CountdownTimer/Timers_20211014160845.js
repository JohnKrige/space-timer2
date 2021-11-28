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
        setTotalTime(timeMs);
        setShowEdit(false);
        console.log(timeMs, 'mofo');
    };

    const onEdit = () => {
        setShowEdit(true);
    }

    console.log(totalTime, 'testing');

    return (
        <div>
            <SetTimerModal onSubmit={setTimer} totalTime={totalTime} show={showEdit} />
            <div>
                <SingleTimer duration={totalTime} repeatTimes={repeatTimes} onEdit={onEdit} />
                
            </div>
            
        </div>
    );
};

export default Timers;