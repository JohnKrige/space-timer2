import React from 'react';
import { ItemName, TimeDisplayMain, TimeDisplaySection } from './chainTimerStyles';

const ChainTimerItem = ({ currentItem, totalItems, name, mins, secs }) => {
    return (
        <>
            <ItemName>
                <div>#{currentItem}/{totalItems}</div>
                <div>{name}</div>
            </ItemName>
            <TimeDisplayMain>
                <TimeDisplaySection>
                    <div>Minutes</div>
                    <div>{mins}</div>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <div>Seconds</div>
                    <div>{secs}</div>
                </TimeDisplaySection>
            </TimeDisplayMain>
        </>
    );
};

export default ChainTimerItem;