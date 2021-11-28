import { useState, useEffect } from 'react';

const Repeater = props => {
    if (props.timeElapsed % props.repeatTime === 0) {
        console.log('Piele!');
    };

    return (
        <div>
            This is the repeater
        </div>
    )
};

export default Repeater;