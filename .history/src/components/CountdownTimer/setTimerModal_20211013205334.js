import React, { useState, useEffect } from 'react';
import { ModalContainer, ModalContent, TimeInput, TimeInputs } from './modalStyles';
import Button from '../Button/Button';
import { getHMS } from '../../helpers/getHMS';

const SetTimerModal = ({ onSubmit, totalTime }) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const [h, m, s] = getHMS(totalTime);
        console.log(h, m, s, 'mogo');
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

        onSubmit(hoursMs + minutesMs + secondsMs);
    };

    return (
        <ModalContainer>
            <ModalContent>
                <h2>Edit timer</h2>
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
                <Button onClick={(event) => submitEditTimerHandler(event)}>Set time</Button>
            </ModalContent>
        </ModalContainer>
    );
};

export default SetTimerModal;