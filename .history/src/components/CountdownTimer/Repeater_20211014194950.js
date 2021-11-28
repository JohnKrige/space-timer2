import { useState, useEffect } from 'react';

const Repeater = props => {

    useEffect(() => {
        if (props.timeElapsed % props.repeatTime === 0) {
            console.log('Piele!');
        };
    }, [props.timeElapsed, props.repeatTime])

    console.log(props.timeElapsed, props.repeatTime);

    return (
        <div>
            This is the repeater
        </div>
    )
};

export default Repeater;