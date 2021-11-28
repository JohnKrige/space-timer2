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
    const [ms, setMs] = useState(0);

    useEffect(() => {
        let timerIntervals;

        if (!runTimer) {
            clearInterval(timerIntervals);
            return;
        }

        timerIntervals = setInterval(() => {
            setTimeElapsed(intervals => intervals + 10);
        }, 10);

        return () => clearInterval(timerIntervals);
    }, [runTimer]);

    const resetTimer = () => {
        setRunTimer(false);
        setTimeElapsed(0);
    };

    useEffect(() => {
        if (timeElapsed % 10 !== 0) return;
        const [h, m, s] = getHMS(timeElapsed);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
        setMs(((timeElapsed/1000 - Math.floor(timeElapsed / 1000)) * 100).toFixed(0));
    }, [timeElapsed]);

    return (
        <TimerPage justify="start">
            <h1 className="PageTitle">Stop watch</h1>
            <div style={{ display: 'flex', height: '100%', alignItems: 'end' }}>
                <TimerDisplay
                    runTimer={runTimer} setRunTimer={setRunTimer}
                    timeElapsed={timeElapsed}
                    resetTimer={resetTimer}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    ms={ms}
                    type="stopwatch"
                />
            </div>

        </TimerPage>
    );
};

export default CountdownTimer;