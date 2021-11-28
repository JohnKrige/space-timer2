import React from 'react';
import { ItemName, TimeDisplayMain, TimeDisplaySection, ItemNameNumber, ItemNameTitle, ChainTimerMain, NextItem, UpNext, MinutesAndSeconds, MinsAndSecsHeading } from './chainTimerStyles';

const ChainTimerItem = ({ currentItem, totalItems, NextItemName, name, mins, secs, isLast }) => {
    return (
        <ChainTimerMain>
            <ItemName>
                <ItemNameTitle>{name}</ItemNameTitle>
                <ItemNameNumber>#{currentItem}/{totalItems}</ItemNameNumber>
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
                <UpNext>Up next</UpNext>
                <div>{!isLast ? NextItemName : 'Done!'}</div>
            </NextItem>
        </ChainTimerMain>
    );
};

export default ChainTimerItem;