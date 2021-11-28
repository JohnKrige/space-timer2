import ChainItem from "./ChainItem";
import TimerPage from '../../pages/Timer/TimerPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlay, faPause, faUndo, faVolumeUp, faVolumeMute, faPlus, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { ButtonsBar } from "./chainTimerStyles";
import Button from '../Button/Button';


const EditTimerChain = (props) => {
    const timersDisplay = props.timers.map((item) => {
        const isActive = item.itemIndex === props.currentTimer;

        // const timeRemaining = isActive ? item.time - props.timeElapsed : item.isDone ? 0 : item.time;
        
        return (
            <ChainItem
                key={item.itemIndex}
                name={item.name}
                time={item.time}
                index={item.itemIndex}
                isActive={isActive}
                moveUp={props.moveItemUp}
                moveDown={props.moveItemDown}
                timeRemaining={item.time}
                remove={props.removeItem}
                editItem={props.editItem}
            />
        )
    });
    
    return (
        <TimerPage>
            <div style={{ display: 'flex', border: '1px solid red' }}>
                <div>
                    <div style={{ border: '1px solid red', padding: '15px' }}>
                        <h3>What is a chain timer?</h3>
                        <h3>How to use it</h3>
                        <ButtonsBar>
                            <Button onClick={() => console.log('penis')} color="blue"><FontAwesomeIcon icon={faPlus} /></Button>
                            <Button onClick={() => console.log('penis')} color="red">Done editing →</Button>
                        </ButtonsBar>
                    </div>
                </div>
                <div>
                    {timersDisplay}
                </div>
            </div>
        </TimerPage>
    )
};

export default EditTimerChain;