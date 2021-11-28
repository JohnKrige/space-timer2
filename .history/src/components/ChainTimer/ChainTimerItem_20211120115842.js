import React from 'react';
import { ItemName } from './chainTimerStyles';

const ChainTimerItem = ({ currentItem, totalItems, name, mins, secs }) => {
    return (
        <>
            <ItemName>
                <div>{currentItem}/{totalItems}</div>
                <div>{name}</div>
            </ItemName>
        </>
    );
};

export default ChainTimerItem;