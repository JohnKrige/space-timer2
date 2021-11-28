import { useState, useEffect } from 'react';

import MainTimer from './MainTimer';
import SetTimerModal from './SetTimerModal';
import Repeater from './Repeater';

const startTime = 10000;
const repeatStartTime = 3000;

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

        if (timeElapsed === totalTime) {
            runTimer(false);
            clearInterval(timerIntervals);
            resetTimer();
            timerCompleted();
        };

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

    const timerCompleted = () => {
        console.log('timerCompleted');
    }

    const onCompletedRepeat = () => {
        console.log('Repeat action!');
    }

    return (
        <div style={{ display: 'flex', height: '100%', alignItems: 'end' }}>
            <SetTimerModal onSubmit={setTimer} totalTime={totalTime} show={showEditMain}/>
                <MainTimer duration={totalTime} onEdit={onEditMain} runTimer={runTimer} setRunTimer={setRunTimer} timeRemaining={timeRemaining} timeElapsed={timeElapsed} resetTimer={resetTimer} />
            <Repeater timeElapsed={timeElapsed} repeatTime={repeatTime} onCompletedRepeat={onCompletedRepeat}/>
        </div>
    );
};

export default Timers;