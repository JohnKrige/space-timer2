import { useState, useEffect } from 'react';

import MainTimer from './MainTimer';
import SetTimerModal from './SetTimerModal';
import Repeater from './Repeater';
import beep from './beep.flac';
import timerFinish from './timersound1.wav';

const startTime = 8000;
const repeatStartTime = 2000;
const audioBeep = new Audio(beep);
const audioFinal = new Audio(timerFinish);

const Timers = () => {
    const [totalTime, setTotalTime] = useState(startTime);
    const [repeatTime, setRepeatTime] = useState(repeatStartTime);
    const [showEditMain, setShowEditMain] = useState(false);
    const [showEditRepeater, setShowEditRepeater] = useState(false);
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(startTime);

    const setTimer = (timeMs) => {
        setTotalTime(timeMs);
        setShowEditMain(false);
    };

    const setRepeater = () => {
        setShowEditRepeater(false);
        console.log('set repeater');
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

    useEffect(() => {
        if (timeElapsed >= totalTime) {
            setRunTimer(false);
            resetTimer();
            timerCompleted();
        };
    }, [timeElapsed, totalTime])

    const resetTimer = () => {
        setRunTimer(false);
        setTimeElapsed(0);
        setTimeRemaining(totalTime);
    };

    const timerCompleted = () => {
        audioFinal.play();
    };

    const onCompletedRepeat = () => {
        audioBeep.play();
    };

    return (
        <div style={{ display: 'flex', height: '100%', alignItems: 'end' }}>
            <SetTimerModal onSubmit={setTimer} totalTime={totalTime} show={showEditMain} />
            <SetTimerModal onSubmit={setRepeater} totalTime={totalTime} const repeatTime={repeatTime} show={showEditRepeater} />
            <MainTimer duration={totalTime} onEdit={() => setShowEditMain(true)} runTimer={runTimer} setRunTimer={setRunTimer} timeRemaining={timeRemaining} timeElapsed={timeElapsed} resetTimer={resetTimer} />
            <Repeater timeElapsed={timeElapsed} repeatTime={repeatTime} onCompletedRepeat={onCompletedRepeat} onEdit={() => setShowEditRepeater(true)}/>
        </div>
    );
};

export default Timers;