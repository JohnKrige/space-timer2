import ChainItem from "./ChainItem";

const EditTimerChain = (props) => {

    const timersDisplay = props.timers.map((item) => {
        const isActive = item.itemIndex === props.currentTimer;

        const timeRemaining = isActive ? item.time - props.timeElapsed : item.isDone ? 0 : item.time;
        return (
            <ChainItem
                key={item.itemIndex}
                name={item.name}
                time={item.time}
                index={item.itemIndex}
                isActive={isActive}
                moveUp={props.moveItemUp}
                moveDown={props.moveItemDown}
                timeRemaining={timeRemaining}
                remove={props.removeItem}
                editItem={props.editItem}
            />
        )
    });
    
    return (
        <div>
            {timersDisplay}
        </div>
    )
};

export default EditTimerChain;