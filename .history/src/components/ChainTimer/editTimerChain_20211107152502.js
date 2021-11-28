import ChainItem from "./ChainItem";
import TimerPage from '../../pages/Timer/TimerPage';

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
            <div>
                {timersDisplay}
            </div>
        </TimerPage>
    )
};

export default EditTimerChain;