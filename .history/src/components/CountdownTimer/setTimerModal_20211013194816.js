import React, { useState } from 'react';
import { ModalContainer, ModalContent } from './modalStyles';

const SetTimerModal = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return (
        <ModalContainer>
            <ModalContent>
                <h2>Edit timer</h2>
                <div>
                    <input id="hours" type="number" value={hours}/>
                    <label htmlFor="hours">Hours</label>
                </div>
            </ModalContent>
        </ModalContainer>
    );
};

export default SetTimerModal;