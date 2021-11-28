import { useState } from 'react';

import { ChainItemContainer } from "./chainTimerStyles";

const ChainItem = (props) => {
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    return (
        <ChainItemContainer isActive={props.isActive}>
            <div>{props.name}</div>
            <div>
                <div >{props.time}</div>
                <div >{props.time}</div>
            </div>
            <div onClick={() => props.moveUp(props.index)}>Move up</div>
            <div onClick={() => props.moveDown(props.index)}>Move down</div>
        </ChainItemContainer>
    )
};

export default ChainItem;