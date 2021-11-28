import React, { useState } from 'react';
import { ModalContainer, ModalContent, TimeInput } from './modalStyles';

const SetTimerModal = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const onChangeHoursHandler = (value) => {
        setHours(value);
    };

    const onChangeMinutesHandler = (value) => {
        setMinutes(value);
    };

    const onChangeSecondsHandler = (value) => {
        setSeconds(value);
    };

    return (
        <ModalContainer>
            <ModalContent>
                <h2>Edit timer</h2>
                <TimeInput>
                    <input id="hours" type="number" value={hours} onChange={(event) => onChangeHoursHandler(event.target.value)}/>
                    <label htmlFor="hours">Hours</label>
                </TimeInput>
            </ModalContent>
        </ModalContainer>
    );
};

export default SetTimerModal;