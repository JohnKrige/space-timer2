import { useState, useEffect } from 'react';

import TimerDisplay from '../Timer/TimerDisplay';
import SetTimerModal from '../SetTimerModal/SetTimerModal';
import Repeater from '../Timer/Repeater';
import beep from './beep.flac';
import timerFinish from './timersound1.wav';
import TimerPage from '../../pages/Timer/TimerPage';
import { getHMS } from '../../helpers/getHMS';

import { CountdownTimerContainer, Header, Message, HeaderContainer } from './countdownTimerStyles';

const startTime = 5000;
const repeatStartTime = 2000;
const audioBeep = new Audio(beep);
const audioFinal = new Audio(timerFinish);

const CountdownTimer = () => {
    const [totalTime, setTotalTime] = useState(startTime);
    const [repeatTime, setRepeatTime] = useState(repeatStartTime);
    const [showEditMain, setShowEditMain] = useState(false);
    const [showEditRepeater, setShowEditRepeater] = useState(false);
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(startTime);
    const [muteMain, setMuteMain] = useState(false);
    const [muteRepeater, setMuteRepeater] = useState(false);
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState();

    const setTimer = (timeMs) => {
        setTotalTime(timeMs);
        setShowEditMain(false);
    };

    const setRepeater = (timeMs) => {
        setRepeatTime(timeMs);
        setShowEditRepeater(false);
    };

    const onCloseModal = (type) => {
        if (type === "repeater") {
            setShowEditRepeater(false);
        } else {
            setShowEditMain(false);
        }
    };

    useEffect(() => {
        resetTimer();
        const [h, m, s] = getHMS(totalTime);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [totalTime]);

    useEffect(() => {
        if (timeRemaining % 1000 !== 0) return;
        const [h, m, s] = getHMS(timeRemaining);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [timeRemaining]);

    useEffect(() => {
        let timerIntervals;
        if (timeElapsed === 0 && runTimer) displayMessage('Started', 2000);

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
        displayMessage('Done');
        if (muteMain) return;
        audioFinal.play();
    };

    const displayMessage = (message, duration = 4900) => {
        setMessage(message);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), duration);
    };

    const onCompletedRepeat = () => {
        if (muteRepeater) return;
        audioBeep.play();
    };

    return (
        <TimerPage justify="start">
            <HeaderContainer>
                <Header className="PageTitle">Countdown timer</Header>
                {showMessage && <Message>{message}</Message>}
            </HeaderContainer>
            <CountdownTimerContainer>
            <SetTimerModal onSubmit={setTimer} totalTime={totalTime} show={showEditMain} onClose={onCloseModal} />
            <SetTimerModal onSubmit={setRepeater} totalTime={totalTime} const repeatTime={repeatTime} show={showEditRepeater} type="repeater" onClose={onCloseModal} />
            <TimerDisplay
                duration={totalTime}
                onEdit={() => setShowEditMain(true)}
                runTimer={runTimer}
                setRunTimer={setRunTimer}
                timeRemaining={timeRemaining}
                timeElapsed={timeElapsed}
                resetTimer={resetTimer}
                onMute={() => setMuteMain(prev => !prev)}
                isMuted={muteMain}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
            <Repeater
                timeElapsed={timeElapsed}
                repeatTime={repeatTime}
                onCompletedRepeat={onCompletedRepeat} onEdit={() => setShowEditRepeater(true)}
                onMute={() => setMuteRepeater(prev => !prev)}
                isMuted={muteRepeater}
            />
            </CountdownTimerContainer>
        </TimerPage>
    );
};

export default CountdownTimer;