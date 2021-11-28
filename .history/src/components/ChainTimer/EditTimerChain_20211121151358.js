import { useState } from 'react';

import ChainEditItem from "./ChainEditItem";
import TimerPage from '../../pages/Timer/TimerPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlay, faPause, faUndo, faVolumeUp, faVolumeMute, faPlus, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { ButtonsBar, EditTimerContainer, WhatIsContainer, EditItems, NoTasks } from "./chainTimerStyles";
import Button from '../Button/Button';
import SetTimerModal from "../SetTimerModal/SetTimerModal";


const EditTimerChain = (props) => {
    const [ newItem, setNewItem ] = useState(false);

    const AddNewItem = (totalTime, name) => {
        setNewItem(false);
        props.addTimer(totalTime, name);
    };

    const newItemProps = {
        totalTime: 500000,
        show: newItem,
        type: "chain item",
        lessThanHour: true,
        name: "Activity name",
        onSubmit: AddNewItem,
        onClose: () => setNewItem(false),
    };

    const timersDisplay = props.timers.map((item) => {
        const isActive = item.itemIndex === props.currentTimer;
        // const timeRemaining = isActive ? item.time - props.timeElapsed : item.isDone ? 0 : item.time;
        
        return (
            <ChainEditItem
                key={item.itemIndex}
                name={item.name}
                time={item.time}
                index={item.itemIndex}
                isActive={isActive}
                moveUp={props.moveItemUp}
                moveDown={props.moveItemDown}
                timeRemaining={item.time}
                remove={props.removeItem}
                editItem={props.editItem}
            />
        )
    });
    
    return (
        <>
            <SetTimerModal {...newItemProps} />
            <EditTimerContainer>
                <ButtonsBar justify="end" margin="20px 0">
                    <Button onClick={() => setNewItem(true)} color="blue"><FontAwesomeIcon icon={faPlus} /></Button>
                    <Button onClick={() => props.closeEdit(false)} color="red">Done →</Button>
                </ButtonsBar>
                <EditItems>
                    <WhatIsContainer>
                        <h3>What is a chain timer?</h3>
                        <p>Good question. I would show you, but I have a boner so I have to sit down for a bit.</p>
                        <h3>How to use it.</h3>
                        <p>Just figure it out chump.</p>
                    </WhatIsContainer>
                    {props.timers.length > 0 &&
                        <div>
                            {timersDisplay}
                        </div>
                    }
                </EditItems>
            </EditTimerContainer>
        </>
    )
};

export default EditTimerChain;