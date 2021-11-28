import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlay, faPause, faUndo } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button/Button';
import { getHMS } from '../../helpers/getHMS';

import { SingleTimerContainer, TimeDisplay, TimeDisplayComponent } from './styles';

const SingleTimer = (props) => {
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
        <SingleTimerContainer>
            <TimeDisplay>
                <TimeDisplayComponent>{displayHours}</TimeDisplayComponent>
                <TimeDisplayComponent>{displayMinutes}</TimeDisplayComponent>
                <TimeDisplayComponent>{displaySeconds}</TimeDisplayComponent>
            </TimeDisplay>
            {props.runTimer
                ? <Button onClick={() => props.setRunTimer(false)} color="blue"><FontAwesomeIcon icon={faPause} /></Button>
                : <Button onClick={() => props.setRunTimer(true)} color="blue"><FontAwesomeIcon icon={faPlay} /></Button>
            }
            <Button onClick={() => props.resetTimer()} color="purple"><FontAwesomeIcon icon={faUndo} /></Button>
            <Button onClick={() => props.onEdit()}><FontAwesomeIcon icon={faEdit}/></Button>
        </SingleTimerContainer>)
};

export default SingleTimer;