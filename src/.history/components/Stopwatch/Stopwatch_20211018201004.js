import { useState, useEffect } from 'react';

import TimerDisplay from '../Timer/TimerDisplay';
import TimerPage from '../../pages/Timer/TimerPage';


const CountdownTimer = () => {
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);

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
                />
            </div>

        </TimerPage>
    );
};

export default CountdownTimer;