import { useState } from 'react';

import { ChainItemContainer } from "./chainTimerStyles";

import { getHMS } from '../../helpers/getHMS';

const ChainItem = (props) => {
    const [h, m, s] = getHMS(props.TimeRemaining);


    return (
        <ChainItemContainer isActive={props.isActive}>
            <div>{props.name}</div>
            <div>
                <div >{m}</div>
                <div >{s}</div>
            </div>
            <div onClick={() => props.moveUp(props.index)}>Move up</div>
            <div onClick={() => props.moveDown(props.index)}>Move down</div>
        </ChainItemContainer>
    )
};

export default ChainItem;