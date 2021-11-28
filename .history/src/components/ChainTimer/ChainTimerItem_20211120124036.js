import React from 'react';
import { ItemName, TimeDisplayMain, TimeDisplaySection, ItemNameNumber, ItemNameTitle, ChainTimerMain, NextItem, MinutesAndSeconds, MinsAndSecsHeading } from './chainTimerStyles';

const ChainTimerItem = ({ currentItem, totalItems, NextItem, name, mins, secs }) => {
    return (
        <ChainTimerMain>
            <ItemName>
                <ItemNameNumber>#{currentItem}/{totalItems}</ItemNameNumber>
                <ItemNameTitle>{name}</ItemNameTitle>
            </ItemName>
            <TimeDisplayMain>
                <TimeDisplaySection>
                    <MinsAndSecsHeading>Minutes</MinsAndSecsHeading>
                    <MinutesAndSeconds>{mins}</MinutesAndSeconds>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <MinsAndSecsHeading>Seconds</MinsAndSecsHeading>
                    <MinutesAndSeconds>{secs}</MinutesAndSeconds>
                </TimeDisplaySection>
            </TimeDisplayMain>
            <NextItem>
                <div>Up next</div>
                <div>{NextItem}</div>
            </NextItem>
        </ChainTimerMain>
    );
};

export default ChainTimerItem;