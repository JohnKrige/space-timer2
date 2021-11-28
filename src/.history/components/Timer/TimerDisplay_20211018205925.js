import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlay, faPause, faUndo, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button/Button';

import { neatTimeDisplay } from '../../helpers/timeDisplay';

import { MainTimerContainer, MainTimeDisplay, MainTimeDisplayComponent, TimeDisplaySection, TimerFace} from './styles';

const TimerDisplay = (props) => {
    const displayHours = neatTimeDisplay(props.hours);
    const displayMinutes = neatTimeDisplay(props.minutes);
    const displaySeconds = neatTimeDisplay(props.seconds);
    const displayMs = neatTimeDisplay(props.ms);

    const volumeIcon = !props.isMuted
        ? <FontAwesomeIcon icon={faVolumeUp} />
        : <FontAwesomeIcon icon={faVolumeMute} />;
        
    return (
        <MainTimerContainer>
            <TimerFace>
            <MainTimeDisplay marginBottom={props.type === "stopwatch" ? 5 : 30}>
                <TimeDisplaySection>
                    <p>Hours</p>
                    <MainTimeDisplayComponent>{displayHours}</MainTimeDisplayComponent>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <p>Minutes</p>
                    <MainTimeDisplayComponent>{displayMinutes}</MainTimeDisplayComponent>
                </TimeDisplaySection>
                <TimeDisplaySection>
                    <p>Seconds</p>
                    <MainTimeDisplayComponent>{displaySeconds}</MainTimeDisplayComponent>
                </TimeDisplaySection>
                </MainTimeDisplay>
                <div>
                    {displayMs}
                </div>
            {props.runTimer
                ? <Button onClick={() => props.setRunTimer(false)} color="blue"><FontAwesomeIcon icon={faPause} /></Button>
                : <Button onClick={() => props.setRunTimer(true)} color="blue"><FontAwesomeIcon icon={faPlay} /></Button>
            }
                <Button onClick={() => props.resetTimer()} color={props.type === "stopwatch" ? "red" : "purple"}><FontAwesomeIcon icon={faUndo} /></Button>
            {props.type !== "stopwatch" && 
                <>
                <Button onClick={() => props.onEdit()} color="pink"><FontAwesomeIcon icon={faEdit} /></Button>
                <Button onClick={() => props.onMute()}>{volumeIcon}</Button>
                </>
            }
            </TimerFace>
        </MainTimerContainer>)
};

export default TimerDisplay;