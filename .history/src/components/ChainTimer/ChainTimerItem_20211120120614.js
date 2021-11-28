import React from 'react';
import { ItemName, TimeDisplayMain } from './chainTimerStyles';

const ChainTimerItem = ({ currentItem, totalItems, name, mins, secs }) => {
    return (
        <>
            <ItemName>
                <div>#{currentItem}/{totalItems}</div>
                <div>{name}</div>
            </ItemName>
            <TimeDisplayMain>
                <div>{mins}</div>
                <div>{secs}</div>
            </TimeDisplayMain>
        </>
    );
};

export default ChainTimerItem;