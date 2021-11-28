import { useState, useEffect } from 'react';

import TimerDisplay from '../Timer/TimerDisplay';
import TimerPage from '../../pages/Timer/TimerPage';
import { getHMS } from '../../helpers/getHMS';

const CountdownTimer = () => {
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let timerIntervals;

        if (!runTimer) {
            clearInterval(timerIntervals);
            return;
        }

        timerIntervals = setInterval(() => {
            setTimeElapsed(intervals => intervals + 100);
        }, 100);

        return () => clearInterval(timerIntervals);
    }, [runTimer]);

    const resetTimer = () => {
        setRunTimer(false);
        setTimeElapsed(0);
    };

    useEffect(() => {
        if (timeElapsed % 1000 !== 0) return;
        const [h, m, s] = getHMS(timeElapsed);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [timeElapsed]);

    return (
        <TimerPage>
            <div style={{ display: 'flex', height: '100%', alignItems: 'end' }}>
                <TimerDisplay
                    // duration={totalTime}
                    // onEdit={() => setShowEditMain(true)}
                    runTimer={runTimer} setRunTimer={setRunTimer}
                    // timeRemaining={timeRemaining}
                    timeElapsed={timeElapsed}
                    resetTimer={resetTimer}
                    // onMute={() => setMuteMain(prev => !prev)}
                    // isMuted={muteMain}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                />
            </div>

        </TimerPage>
    );
};

export default CountdownTimer;