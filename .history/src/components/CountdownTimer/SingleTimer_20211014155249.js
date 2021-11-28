import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlay, faPause, faUndo } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button/Button';
import { getHMS } from '../../helpers/getHMS';

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
        resetTimer();
        const [h, m, s] = getHMS(props.duration);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [props.duration]);

    useEffect(() => {
        if (timeRemaining % 1000 !== 0) return;
        const [h, m, s] = getHMS(timeRemaining);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [timeRemaining])
    
    const displayHours = `${hours}`.length < 2 ? `0${hours}` : `${hours}`;
    const displayMinutes = `${minutes}`.length < 2 ? `0${minutes}` : `${minutes}`;
    const displaySeconds = `${seconds}`.length < 2 ? `0${seconds}` : `${seconds}`;
        
    return (
        <SingleTimerContainer>
            <TimeDisplay>
                <TimeDisplayComponent>{displayHours}</TimeDisplayComponent>
                <TimeDisplayComponent>{displayMinutes}</TimeDisplayComponent>
                <TimeDisplayComponent>{displaySeconds}</TimeDisplayComponent>
            </TimeDisplay>
            {runTimer
                ? <Button onClick={onPauseHandler} color="blue"><FontAwesomeIcon icon={faPause} /></Button>
                : <Button onClick={onStartHandler} color="blue"><FontAwesomeIcon icon={faPlay} /></Button>
            }
            <Button onClick={onStopHandler} color="purple"><FontAwesomeIcon icon={faUndo} /></Button>
            <Button onClick={() => props.onEdit()}><FontAwesomeIcon icon={faEdit}/></Button>
        </SingleTimerContainer>)
};

export default Timer;