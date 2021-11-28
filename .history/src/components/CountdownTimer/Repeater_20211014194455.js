import { useState, useEffect } from 'react';

const Repeater = props => {
    if (props.repeatTime % props.timeElapsed === 0) {
        console.log('Piele!');
    };

    return (
        <div>
            This is the repeater
        </div>
    )
};

export default Repeater;