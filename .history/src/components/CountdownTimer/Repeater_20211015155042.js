import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import { MainTimeDisplay, MainTimeDisplayComponent, RepeaterContainer, TimeDisplaySection } from './styles';
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
            <MainTimeDisplay marginBottom={10}>
                <TimeDisplaySection>
                    <p>Hours</p>
                    <MainTimeDisplayComponent fontSize={24} padding={5}>01</MainTimeDisplayComponent>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <p>Minutes</p>
                    <MainTimeDisplayComponent fontSize={24} padding={5}>01</MainTimeDisplayComponent>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <p>Seconds</p>
                    <MainTimeDisplayComponent fontSize={24} padding={5}>01</MainTimeDisplayComponent>
                </TimeDisplaySection>

            </MainTimeDisplay>
            <Button onClick={() => console.log('Something!')}><FontAwesomeIcon icon={faEdit} /></Button>
        </RepeaterContainer>
    )
};

export default Repeater;