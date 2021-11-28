import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlay, faPause, faUndo } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button/Button';

import { SingleTimerContainer, TimeDisplay, TimeDisplayComponent } from './styles';

const Timer = props => {
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(props.duration);
    const [repeatsLeft, setRepeatsLeft] = useState(props.repeatTimes);
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

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

    // initial setting hours, minutes and seconds
    useEffect(() => {
        const initialHours = Math.floor(props.duration / 3600000);
        const initialMinutes = Math.floor((props.duration - 3600000 * initialHours) / 60000);
        const initialSeconds = Math.floor((props.duration - (3600000 * initialHours) - 60000 * initialMinutes) / 1000);
        setHours(initialHours);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    }, []);

    useEffect(() => {
        if (timeRemaining % 1000 !== 0) return;
        console.log('penis');
        const initialHours = Math.floor(timeRemaining / 3600000);
        const initialMinutes = Math.floor((timeRemaining - 3600000 * initialHours) / 60000);
        const initialSeconds = Math.floor((timeRemaining - (3600000 * initialHours) - 60000 * initialMinutes) / 1000);
        setHours(initialHours);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    }, [timeRemaining])
    
    console.log(hours, minutes, seconds);
        
    return (
        <SingleTimerContainer>
            <TimeDisplay>
                <TimeDisplayComponent>00</TimeDisplayComponent>
                <TimeDisplayComponent>01</TimeDisplayComponent>
                <TimeDisplayComponent>30</TimeDisplayComponent>
            </TimeDisplay>
            {runTimer
                ? <Button onClick={onPauseHandler} color="blue"><FontAwesomeIcon icon={faPause} /></Button>
                : <Button onClick={onStartHandler} color="blue"><FontAwesomeIcon icon={faPlay} /></Button>
            }
            <Button onClick={onStopHandler} color="purple"><FontAwesomeIcon icon={faUndo} /></Button>
            <Button onClick={onStopHandler}><FontAwesomeIcon icon={faEdit} /></Button>
        </SingleTimerContainer>)
};

export default Timer;