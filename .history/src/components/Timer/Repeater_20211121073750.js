import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,  faVolumeUp, faVolumeMute} from '@fortawesome/free-solid-svg-icons'

import { MainTimeDisplay, MainTimeDisplayComponent, RepeaterContainer, TimeDisplaySection, TimerFace } from './repeaterStyles';
import Button from '../Button/Button';
import { neatTimeDisplay } from '../../helpers/timeDisplay';

import { getHMS } from '../../helpers/getHMS';

const Repeater = props => {
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [numRepeats, setNumRepeats] = useState(0);
 
    useEffect(() => {

    }, [props.timeElapsed, props.repeatTime])

    useEffect(() => {
        let repeatTime = (numRepeats * props.repeatTime + props.repeatTime) - props.timeElapsed + 1000;
        if (repeatTime === 1000) {
            setNumRepeats(prev => prev + 1);
        };

        if (props.timeElapsed === 0) {
            setNumRepeats(0);
            repeatTime = props.repeatTime;
        };

        if (props.timeElapsed > 0 && props.timeElapsed % props.repeatTime === 0) {
            props.onCompletedRepeat();
        };

        const [h, m, s] = getHMS(repeatTime);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
    }, [props.timeElapsed, props.repeatTime]);

    const volumeIcon = !props.isMuted ? <FontAwesomeIcon icon={faVolumeUp} /> : <FontAwesomeIcon icon={faVolumeMute} />

    const hoursDisplay = neatTimeDisplay(hours);
    const minutesDisplay = neatTimeDisplay(minutes);
    const secondsDisplay = neatTimeDisplay(seconds);

    return (
        <RepeaterContainer>
            <TimerFace padding="10px 20px">
                <div style={{ marginBottom: '5px' }}>
                <h4>Repeater</h4>
                <MainTimeDisplay marginBottom={15}>
                    <TimeDisplaySection fontSize="16px">
                        <p>H</p>
                            <MainTimeDisplayComponent fontSize={24} padding={5}>
                                {hoursDisplay}
                            </MainTimeDisplayComponent>
                    </TimeDisplaySection>
                        <TimeDisplaySection fontSize="16px">
                        <p>M</p>
                            <MainTimeDisplayComponent fontSize={24} padding={5}>
                                {minutesDisplay}
                            </MainTimeDisplayComponent>
                    </TimeDisplaySection>
                        <TimeDisplaySection fontSize="16px">
                        <p>S</p>
                            <MainTimeDisplayComponent fontSize={24} padding={5}>
                                {secondsDisplay}
                            </MainTimeDisplayComponent>
                    </TimeDisplaySection>

                </MainTimeDisplay>
                    <Button onClick={props.onEdit} color="blue"><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button onClick={props.onMute}>{volumeIcon}</Button>
                </div>
                </TimerFace>
        </RepeaterContainer>
    )
};

export default Repeater;