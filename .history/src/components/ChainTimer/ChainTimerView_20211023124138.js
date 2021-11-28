const style = {
    padding: '5px',
    border: '1px solid white',
}

const ChainItem = (props) => {
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    return (
        <div style={{ margin: '20px 0' }}>
            <div style={{ display: 'flex' }}>
                <div>{props.name}</div>
                <div >{props.time}</div>
                <div onClick={() => props.moveUp(props.index)}>Move up</div>
                <div onClick={() => props.moveDown(props.index)}>Move down</div>
            </div>
        </div>
    )
};

export default ChainItem