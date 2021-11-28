import React from 'react';
import { ItemName, TimeDisplayMain, TimeDisplaySection, ItemNameNumber, ItemNameTitle, ChainTimerMain, NextItem, UpNext, MinutesAndSeconds, MinsAndSecsHeading } from './chainTimerStyles';

const ChainTimerItem = ({ currentItem, totalItems, NextItemName, name, mins, secs }) => {
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
                <UpNext>Up next</UpNext>
                <div>{NextItemName || 'Finished!'}</div>
            </NextItem>
        </ChainTimerMain>
    );
};

export default ChainTimerItem;