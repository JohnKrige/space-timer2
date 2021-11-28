import { useState, useEffect } from 'react';

import MainTimer from './MainTimer';
import SetTimerModal from './SetTimerModal';
import Repeater from './Repeater';

const startTime = 30000;
const repeatStartTime = 1000;

const Timers = () => {
    const [totalTime, setTotalTime] = useState(startTime);
    const [repeatTime, setRepeatTime] = useState(repeatStartTime);
    const [showEditMain, setShowEditMain] = useState(false);
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(startTime);

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

    const resetTimer = () => {
        setRunTimer(false);
        setTimeElapsed(0);
        setTimeRemaining(totalTime);
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'flex-end'}}>
            <SetTimerModal onSubmit={setTimer} totalTime={totalTime} show={showEditMain}/>
            <div style={{display: "flex", alignItems: "center"}}>
                <MainTimer duration={totalTime} onEdit={onEditMain} runTimer={runTimer} setRunTimer={setRunTimer} timeRemaining={timeRemaining} timeElapsed={timeElapsed} resetTimer={resetTimer} />
                <Repeater timeElapsed={timeElapsed} repeatTime={repeatTime} />
            </div>
        </div>
    );
};

export default Timers;