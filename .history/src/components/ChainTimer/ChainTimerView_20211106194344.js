import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faTrash, faEdit, faPeopleArrows} from '@fortawesome/free-solid-svg-icons';
import SetTimerModal from '../SetTimerModal/SetTimerModal';

import { ChainItemContainer, TimeDisplay, TimeDisplayContainer, ChainItemBackground, TimeDisplayLabel, MoveLabel, ChainItemButton, NameLabel, ChainItemButtons } from "./chainTimerStyles";

import { getHMS } from '../../helpers/getHMS';
import { neatTimeDisplay } from '../../helpers/timeDisplay';

const ChainItem = (props) => {
    const [showEditItem, setShowEditItem] = useState(false);
    const [h, m, s] = getHMS(props.timeRemaining);

    const editItem = (timeMs) => {
        setShowEditItem(false);
        console.log(`You want to edit ${timeMs}`);
    };

    return (
        <ChainItemContainer isActive={props.isActive}>
            <SetTimerModal onSubmit={() => editItem} totalTime={props.time} show={showEditItem} onClose={() => setShowEditItem(false)} type=""/>
            <ChainItemBackground>
                <NameLabel>
                    <div>{props.name}</div>
                </NameLabel>
                <TimeDisplayContainer>
                    <div >
                        <div>
                            <TimeDisplayLabel>M</TimeDisplayLabel>
                        </div>
                        <TimeDisplay>{neatTimeDisplay(m)}</TimeDisplay>
                    </div>
                    <div >
                        <TimeDisplayLabel>S</TimeDisplayLabel>
                        <TimeDisplay>{neatTimeDisplay(s)}</TimeDisplay>
                    </div>
                </TimeDisplayContainer>
                <div>
                    <FontAwesomeIcon icon={faChevronUp} onClick={() => props.moveUp(props.index)} />
                    <MoveLabel>Move item</MoveLabel>
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => props.moveDown(props.index)} />
                </div>
                <ChainItemButtons>
                    <ChainItemButton onClick={() => setShowEditItem(true)} colorInvert><FontAwesomeIcon icon={faEdit} /></ChainItemButton>
                    <ChainItemButton onClick={() => props.remove(props.index)}><FontAwesomeIcon icon={faTrash} /></ChainItemButton>
                </ChainItemButtons>
            </ChainItemBackground>
        </ChainItemContainer>
    )
};

export default ChainItem;