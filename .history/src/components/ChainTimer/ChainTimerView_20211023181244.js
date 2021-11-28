import { useState } from 'react';

import { ChainItemContainer, TimeDisplay, TimeDisplayContainer } from "./chainTimerStyles";

import { getHMS } from '../../helpers/getHMS';
import { neatTimeDisplay } from '../../helpers/timeDisplay';

const ChainItem = (props) => {
    const [m, s] = getHMS(props.timeRemaining);

    return (
        <ChainItemContainer isActive={props.isActive}>
            <div>{props.name}</div>
            <TimeDisplayContainer>
                <div >
                    <div>M</div>
                    <TimeDisplay>{neatTimeDisplay(m)}</TimeDisplay>
                </div>
                <div >
                    <div>S</div>
                    <TimeDisplay>{neatTimeDisplay(s)}</TimeDisplay>
                </div>
            </TimeDisplayContainer>
            <div onClick={() => props.moveUp(props.index)}>Move up</div>
            <div onClick={() => props.moveDown(props.index)}>Move down</div>
            <div onClick={() => props.remove(props.index)}>Remove</div>
        </ChainItemContainer>
    )
};

export default ChainItem;