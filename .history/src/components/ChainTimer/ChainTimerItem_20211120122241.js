import React from 'react';
import { ItemName, TimeDisplayMain, TimeDisplaySection, ItemNameNumber, ItemNameTitle, ChainTimerMain, MinutesAndSeconds } from './chainTimerStyles';

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
                    <MinutesAndSeconds>{mins}</MinutesAndSeconds>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <div>Seconds</div>
                    <MinutesAndSeconds>{secs}</MinutesAndSeconds>
                </TimeDisplaySection>
            </TimeDisplayMain>
        </ChainTimerMain>
    );
};

export default ChainTimerItem;