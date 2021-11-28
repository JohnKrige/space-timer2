import React from 'react';
import { ModalContainer, ModalContent } from './modalStyles';

const SetTimerModal = () => {
    return (
        <ModalContainer>
            <ModalContent>
                <h2>Edit timer</h2>
                <div>
                    <input id="hours" type="number"></input>
                    <label htmlFor="hours">Hours</label>
                </div>
            </ModalContent>
        </ModalContainer>
    );
};

export default SetTimerModal;