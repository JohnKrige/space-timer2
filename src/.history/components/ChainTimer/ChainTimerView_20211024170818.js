import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faTrash} from '@fortawesome/free-solid-svg-icons';

import { ChainItemContainer, TimeDisplay, TimeDisplayContainer, ChainItemBackground, TimeDisplayLabel } from "./chainTimerStyles";

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
                        <TimeDisplayLabel>M</TimeDisplayLabel>
                        <TimeDisplay>{neatTimeDisplay(m)}</TimeDisplay>
                    </div>
                    <div >
                        <TimeDisplayLabel>S</TimeDisplayLabel>
                        <TimeDisplay>{neatTimeDisplay(s)}</TimeDisplay>
                    </div>
                </TimeDisplayContainer>
                <div>
                    <FontAwesomeIcon icon={faChevronUp} onClick={() => props.moveUp(props.index)} />
                    <div>Move item</div>
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => props.moveDown(props.index)} />
                </div>
                <div onClick={() => props.remove(props.index)}><FontAwesomeIcon icon={faTrash} /></div>
            </ChainItemBackground>
        </ChainItemContainer>
    )
};

export default ChainItem;