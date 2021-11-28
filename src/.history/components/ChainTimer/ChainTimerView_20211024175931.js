import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faTrash} from '@fortawesome/free-solid-svg-icons';

import { ChainItemContainer, TimeDisplay, TimeDisplayContainer, ChainItemBackground, TimeDisplayLabel, MoveLabel, DeleteButton, NameLabel } from "./chainTimerStyles";

import { getHMS } from '../../helpers/getHMS';
import { neatTimeDisplay } from '../../helpers/timeDisplay';

const ChainItem = (props) => {
    const [h, m, s] = getHMS(props.timeRemaining);

    return (
        <ChainItemContainer isActive={props.isActive}>
            <ChainItemBackground>
                <div>{props.name}</div>
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
                <DeleteButton onClick={() => props.remove(props.index)}><FontAwesomeIcon icon={faTrash} /></DeleteButton>
            </ChainItemBackground>
        </ChainItemContainer>
    )
};

export default ChainItem;