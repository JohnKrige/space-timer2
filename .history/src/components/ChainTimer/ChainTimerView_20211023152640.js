import { useState } from 'react';

import { ChainItemContainer, TimeDisplay } from "./chainTimerStyles";

import { getHMS } from '../../helpers/getHMS';

const ChainItem = (props) => {
    const [h, m, s] = getHMS(props.timeRemaining);


    return (
        <ChainItemContainer isActive={props.isActive}>
            <div>{props.name}</div>
            <TimeDisplay>
                <div >{m}</div>
                <div >{s}</div>
            </TimeDisplay>
            <div onClick={() => props.moveUp(props.index)}>Move up</div>
            <div onClick={() => props.moveDown(props.index)}>Move down</div>
            <div onClick={() => props.remove(props.index)}>Remove</div>
        </ChainItemContainer>
    )
};

export default ChainItem;