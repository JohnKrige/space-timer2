import { useState } from 'react';

import { ChainItemContainer } from "./chainTimerStyles";

import { getHMS } from '../../helpers/getHMS';

const ChainItem = (props) => {
    props.timeRemaining;


    return (
        <ChainItemContainer isActive={props.isActive}>
            <div>{props.name}</div>
            <div>
                <div >{minutes}</div>
                <div >{seconds}</div>
            </div>
            <div onClick={() => props.moveUp(props.index)}>Move up</div>
            <div onClick={() => props.moveDown(props.index)}>Move down</div>
        </ChainItemContainer>
    )
};

export default ChainItem;