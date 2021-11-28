import { useState, useEffect } from 'react';

import { MainTimeDisplay, MainTimeDisplayComponent, RepeaterContainer } from './styles';
import Button from '../Button/Button';

const Repeater = props => {

    useEffect(() => {
        if (props.timeElapsed > 0 && props.timeElapsed % props.repeatTime === 0) {
            console.log('Piele!');
        };
    }, [props.timeElapsed, props.repeatTime])

    console.log(props.timeElapsed, props.repeatTime);

    return (
        <RepeaterContainer>
            <MainTimeDisplay>
                <MainTimeDisplayComponent fontSize={24} padding={5}>00</MainTimeDisplayComponent>
                <MainTimeDisplayComponent fontSize={24} padding={5}>01</MainTimeDisplayComponent>
                <MainTimeDisplayComponent fontSize={24} padding={5}>30</MainTimeDisplayComponent>
            </MainTimeDisplay>
            <Button />
        </RepeaterContainer>
    )
};

export default Repeater;