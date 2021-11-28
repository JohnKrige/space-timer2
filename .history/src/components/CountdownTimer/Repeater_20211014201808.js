import { useState, useEffect } from 'react';

import { MainTimeDisplay, MainTimeDisplayComponent } from './styles';

const Repeater = props => {

    useEffect(() => {
        if (props.timeElapsed > 0 && props.timeElapsed % props.repeatTime === 0) {
            console.log('Piele!');
        };
    }, [props.timeElapsed, props.repeatTime])

    console.log(props.timeElapsed, props.repeatTime);

    return (
        <div>
            <MainTimeDisplay>
                <MainTimeDisplayComponent>00</MainTimeDisplayComponent>
                <MainTimeDisplayComponent>01</MainTimeDisplayComponent>
                <MainTimeDisplayComponent>30</MainTimeDisplayComponent>
            </MainTimeDisplay>
        </div>
    )
};

export default Repeater;