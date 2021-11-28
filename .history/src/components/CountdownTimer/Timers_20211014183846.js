import { useState, useEffect } from 'react';

import SingleTimer from './SingleTimer';
import SetTimerModal from './SetTimerModal';

const startTime = 30000;

const Timers = () => {
    const [totalTime, setTotalTime] = useState(300000);
    const [showEditMain, setShowEditMain] = useState(false);
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(30000);

    const setTimer = (timeMs) => {
        setTotalTime(timeMs);
        setShowEditMain(false);
    };

    const onEditMain = () => {
        setShowEditMain(true);
    };

    useEffect(() => {
        let timerIntervals;

        if (!runTimer) {
            clearInterval(timerIntervals);
            return;
        }

        timerIntervals = setInterval(() => {
            setTimeElapsed(intervals => intervals + 100);
            setTimeRemaining(oldTime => oldTime - 100);
        }, 100);

        return () => clearInterval(timerIntervals);
    }, [runTimer]);

    return (
        <div>
            <SetTimerModal onSubmit={setTimer} totalTime={totalTime} show={showEditMain}/>
            <div>
                <SingleTimer duration={totalTime} onEdit={onEditMain} runTimer={runTimer} setRunTimer={setRunTimer}/>
            </div>
            
        </div>
    );
};

export default Timers;