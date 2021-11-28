import { useState, useEffect } from 'react';

import SingleTimer from './SingleTimer';
import SetTimerModal from './SetTimerModal';

const Timers = () => {
    const [totalTime, setTotalTime] = useState(300000);
    const [showEditMain, setShowEditMain] = useState(false);

    const setTimer = (timeMs) => {
        setTotalTime(timeMs);
        setShowEditMain(false);
    };

    const onEditMain = () => {
        setShowEditMain(true);
    };

    return (
        <div>
            <SetTimerModal onSubmit={setTimer} totalTime={totalTime} show={showEditMain} />
            <div>
                <SingleTimer duration={totalTime} onEdit={onEditMain} />

            </div>
            
        </div>
    );
};

export default Timers;