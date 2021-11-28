import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlay, faPause, faUndo, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button/Button';
import { getHMS } from '../../helpers/getHMS';

import { MainTimerContainer, MainTimeDisplay, MainTimeDisplayComponent, TimeDisplaySection, TimerFace } from './styles';

const MainTimer = (props) => {
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        props.resetTimer();
        const [h, m, s] = getHMS(props.duration);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [props.duration]);

    useEffect(() => {
        if (props.timeRemaining % 1000 !== 0) return;
        const [h, m, s] = getHMS(props.timeRemaining);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [props.timeRemaining])
    
    const displayHours = `${hours}`.length < 2 ? `0${hours}` : `${hours}`;
    const displayMinutes = `${minutes}`.length < 2 ? `0${minutes}` : `${minutes}`;
    const displaySeconds = `${seconds}`.length < 2 ? `0${seconds}` : `${seconds}`;
        
    return (
        <MainTimerContainer>
            <TimerFace>
            <MainTimeDisplay>
                <TimeDisplaySection>
                    <p>Hours</p>
                    <MainTimeDisplayComponent>{displayHours}</MainTimeDisplayComponent>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <p>Minutes</p>
                    <MainTimeDisplayComponent>{displayMinutes}</MainTimeDisplayComponent>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <p>Seconds</p>
                    <MainTimeDisplayComponent>{displaySeconds}</MainTimeDisplayComponent>
                </TimeDisplaySection>
            </MainTimeDisplay>
            {props.runTimer
                ? <Button onClick={() => props.setRunTimer(false)} color="blue"><FontAwesomeIcon icon={faPause} /></Button>
                : <Button onClick={() => props.setRunTimer(true)} color="blue"><FontAwesomeIcon icon={faPlay} /></Button>
            }
            <Button onClick={() => props.resetTimer()} color="purple"><FontAwesomeIcon icon={faUndo} /></Button>
                <Button onClick={() => props.onEdit()}><FontAwesomeIcon icon={faEdit} /></Button>
                <Button onClick={() => props.onEdit()}><FontAwesomeIcon icon={faVolumeUp} /></Button>
            </TimerFace>
        </MainTimerContainer>)
};

export default MainTimer;