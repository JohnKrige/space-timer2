import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';

import { ChainItemContainer, TimeDisplay, TimeDisplayContainer, ChainItemBackground, TimeDisplayLabel, MoveLabel, ChainItemButton, NameLabel, ChainItemButtons } from "./chainTimerStyles";

import { getHMS } from '../../helpers/getHMS';
import { neatTimeDisplay } from '../../helpers/timeDisplay';

const ChainItem = (props) => {
    const [h, m, s] = getHMS(props.timeRemaining);

    return (
        <ChainItemContainer isActive={props.isActive}>
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
                    <ChainItemButton onClick={() => props.remove(props.index)}><FontAwesomeIcon icon={faTrash} /></ChainItemButton>
                    <ChainItemButton onClick={() => props.remove(props.index)}><FontAwesomeIcon icon={faEdit} /></ChainItemButton>
                </ChainItemButtons>
            </ChainItemBackground>
        </ChainItemContainer>
    )
};

export default ChainItem;