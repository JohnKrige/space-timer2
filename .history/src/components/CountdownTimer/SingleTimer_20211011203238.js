import { useState, useEffect, useCallback } from 'react';

import Button from '../Button/Button';

import { SingleTimerContainer, TimeDisplay, TimeDisplayComponent } from './styles';

const Timer = props => {
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(props.duration);
    const [repeatsLeft, setRepeatsLeft] = useState(props.repeatTimes);

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

    const onStartHandler = () => {
        setRunTimer(true);
    };

    const onPauseHandler = () => {
        setRunTimer(false);
    };

    const onStopHandler = () => {
        resetTimer();
        setRepeatsLeft(props.repeatTimes);
    };

    const resetTimer = useCallback((continueRunning = false) => {
        setRunTimer(continueRunning);
        setTimeElapsed(0);
        setTimeRemaining(props.duration);
    },[props.duration]);

    useEffect(() => {
        if (timeElapsed - props.duration === 0) {
            if (repeatsLeft > 0) {
                resetTimer(true);
                setRepeatsLeft(old => old - 1);
            } else {
                resetTimer();
                setRepeatsLeft(props.repeatTimes);
            }
        }
    }, [props.duration, props.repeatTimes, repeatsLeft, resetTimer, timeElapsed]);

    return (
        <SingleTimerContainer>
            <TimeDisplay>
                <TimeDisplayComponent>00</TimeDisplayComponent>
                <TimeDisplayComponent>01</TimeDisplayComponent>
                <TimeDisplayComponent>30</TimeDisplayComponent>
            </TimeDisplay>
            {runTimer
                ? <Button onClick={onPauseHandler} color={"blue"}>Pause</Button>
                : <Button onClick={onStartHandler} color={"blue"}>Start</Button>
            }
            <Button onClick={onStopHandler}>Reset</Button>
            <Button onClick={onStopHandler} color="purple" round={true}>Edit</Button>
        </SingleTimerContainer>)
};

export default Timer;