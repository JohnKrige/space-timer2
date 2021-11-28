import React, { useState, useEffect } from 'react';
import { ModalContainer, ModalContent, TimeInput, TimeInputs } from './modalStyles';
import Button from '../Button/Button';
import { getHMS } from '../../helpers/getHMS';

const SetTimerModal = ({ onSubmit, totalTime, show, type="main", repeatTime=0 }) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [error, setError] = useState();

    useEffect(() => {   
        const timeToUse = type === "repeater" ? repeatTime : totalTime;
        const [h, m, s] = getHMS(timeToUse);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, []);

    const onChangeHoursHandler = (value) => {
        setHours(value);
    };

    const onChangeMinutesHandler = (value) => {
        setMinutes(value);
    };

    const onChangeSecondsHandler = (value) => {
        setSeconds(value);
    };

    const submitEditTimerHandler = (event) => {
        event.preventDefault();
        const hoursMs = hours * 1000 * 60 * 60;
        const minutesMs = minutes * 1000 * 60;
        const secondsMs = seconds * 1000;

        const editTotal = hoursMs + minutesMs + secondsMs;

        if (type === "repeater" && editTotal >= totalTime) {
            const [h, m, s] = getHMS(editTotal);
            setError(`Repeater time can't exceed the main timer's time of: ${h}h ${m}m ${s}s`);
            return;
        };

        setError();
        onSubmit(editTotal);
    };

    return (
        <ModalContainer show={show}>
            <ModalContent>
                <h2>Edit { type }</h2>
                <TimeInputs submit={(event) => submitEditTimerHandler(event)}>
                    <TimeInput>
                        <input id="hours" type="number" value={hours} onChange={(event) => onChangeHoursHandler(event.target.value)} />
                        <label htmlFor="hours">Hours</label>
                    </TimeInput>
                    <TimeInput>
                        <input id="minutes" type="number" value={minutes} onChange={(event) => onChangeMinutesHandler(event.target.value)} />
                        <label htmlFor="minutes">Minutes</label>
                    </TimeInput>
                    <TimeInput>
                        <input id="seconds" type="number" value={seconds} onChange={(event) => onChangeSecondsHandler(event.target.value)} />
                        <label htmlFor="seconds">Seconds</label>
                    </TimeInput>
                </TimeInputs>
                <div style={{marginBottom: "20px"}}>
                    <Button onClick={(event) => submitEditTimerHandler(event)}>Set time</Button>
                </div>
                {error &&
                    <p style={{ color: "red", marginTop: "20px"}}>{error}</p>
                }
            </ModalContent>
        </ModalContainer>
    );
};

export default SetTimerModal;