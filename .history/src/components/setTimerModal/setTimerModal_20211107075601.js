import React, { useState, useEffect } from 'react';
import { ModalContainer, ModalContent, TimeInput, TimeInputs, CloseModal, ModalBackground } from './modalStyles';
import Button from '../Button/Button';
import { getHMS } from '../../helpers/getHMS';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SetTimerModal = ({ onSubmit, totalTime, show, type="main", repeatTime=0, onClose, lessThanHour, name }) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerName, setTimerName] = useState();
    const [error, setError] = useState();

    useEffect(() => {   
        const timeToUse = type === "repeater" ? repeatTime : totalTime;
        const [h, m, s] = getHMS(timeToUse);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, []);

    const onChangeHoursHandler = (value) => {
        if (value < 0) {
            setError('Must enter positive value');
            return;
        };

        setError();
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

        const hourInMs = 1000 * 60 * 60;

        if (lessThanHour && editTotal >= hourInMs) {
            setError("Time has to be less than 60 minutes");
            return;
        };

        if (editTotal <= 0) {
            setError("Time entered has to be larger than zero");
            return;
        };

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
            <div style={{height: "100%"}}>
                <ModalBackground>
                    <ModalContent>
                        <CloseModal onClick={() => onClose(type)}>
                            {<FontAwesomeIcon icon={faTimes} />}
                        </CloseModal>
                        <h2>Edit {type}</h2>
                        {name &&
                            <TimeInput>
                                <input id="hours" type="text" value={name} onChange={(event) => setTimerName(event.target.value)} />
                                <label htmlFor="hours">Hours</label>
                            </TimeInput>
                        }
                        <TimeInputs submit={(event) => submitEditTimerHandler(event)}>
                            {!lessThanHour &&
                                <TimeInput>
                                    <input id="hours" type="number" value={hours} onChange={(event) => onChangeHoursHandler(event.target.value)} />
                                    <label htmlFor="hours">Hours</label>
                                </TimeInput>
                            }
                            <TimeInput color="purple">
                                <input id="minutes" type="number" value={minutes} onChange={(event) => onChangeMinutesHandler(event.target.value)} />
                                <label htmlFor="minutes">Minutes</label>
                            </TimeInput>
                            <TimeInput color="red">
                                <input id="seconds" type="number" value={seconds} onChange={(event) => onChangeSecondsHandler(event.target.value)} />
                                <label htmlFor="seconds">Seconds</label>
                            </TimeInput>
                        </TimeInputs>
                        <div style={{ marginBottom: "20px" }}>
                            <Button onClick={(event) => submitEditTimerHandler(event)} color="purple">Set time</Button>
                        </div>
                        {error &&
                            <p style={{ color: "red", marginTop: "20px" }}>{error}</p>
                        }
                    </ModalContent>
                </ModalBackground>
            </div>
        </ModalContainer>
    );
};

export default SetTimerModal;