import { useState } from 'react';

import { ChainItemContainer } from "./chainTimerStyles";

const ChainItem = (props) => {
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    return (
        <ChainItemContainer style={{ display: 'flex' }}>
            <div>{props.name}</div>
            <div >{props.time}</div>
            <div onClick={() => props.moveUp(props.index)}>Move up</div>
            <div onClick={() => props.moveDown(props.index)}>Move down</div>
        </ChainItemContainer>
    )
};

export default ChainItem