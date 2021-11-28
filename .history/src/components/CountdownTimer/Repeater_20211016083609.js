import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import { MainTimeDisplay, MainTimeDisplayComponent, RepeaterContainer, TimeDisplaySection, TimerFace } from './styles';
import Button from '../Button/Button';

import { getHMS } from '../../helpers/getHMS';

const Repeater = props => {
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
 
    useEffect(() => {
        if (props.timeElapsed > 0 && props.timeElapsed % props.repeatTime === 0) {
            console.log('Piele!');
        };
    }, [props.timeElapsed, props.repeatTime])

    useEffect(() => {
        const [h, m, s] = getHMS(props.timeRemaining);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [props.timeElapsed])

    return (
        <RepeaterContainer>
            <TimerFace padding="10px 20px">
            <h4>Repeater</h4>
            <MainTimeDisplay marginBottom={15}>
                <TimeDisplaySection fontSize="16px">
                    <p>H</p>
                        <MainTimeDisplayComponent fontSize={24} padding={5}>
                            {hours}
                        </MainTimeDisplayComponent>
                </TimeDisplaySection>
                    <TimeDisplaySection fontSize="16px">
                    <p>M</p>
                        <MainTimeDisplayComponent fontSize={24} padding={5}>
                            {minutes}
                        </MainTimeDisplayComponent>
                </TimeDisplaySection>
                    <TimeDisplaySection fontSize="16px">
                    <p>S</p>
                        <MainTimeDisplayComponent fontSize={24} padding={5}>
                            {seconds}
                        </MainTimeDisplayComponent>
                </TimeDisplaySection>

            </MainTimeDisplay>
            <Button onClick={() => console.log('Something!')}><FontAwesomeIcon icon={faEdit} /></Button>
            </TimerFace>
        </RepeaterContainer>
    )
};

export default Repeater;