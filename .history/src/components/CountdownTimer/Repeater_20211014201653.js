import { useState, useEffect } from 'react';

import { MainTimeDisplay } from './styles';

const Repeater = props => {

    useEffect(() => {
        if (props.timeElapsed > 0 && props.timeElapsed % props.repeatTime === 0) {
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