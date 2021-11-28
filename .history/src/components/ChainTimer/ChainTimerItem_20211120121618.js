import React from 'react';
import { ItemName, TimeDisplayMain, TimeDisplaySection, ItemNameNumber, ItemNameTitle, ChainTimerMain } from './chainTimerStyles';

const ChainTimerItem = ({ currentItem, totalItems, name, mins, secs }) => {
    return (
        <ChainTimerMain>
            <ItemName>
                <ItemNameNumber>#{currentItem}/{totalItems}</ItemNameNumber>
                <ItemNameTitle>{name}</ItemNameTitle>
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
        </ChainTimerMain>
    );
};

export default ChainTimerItem;