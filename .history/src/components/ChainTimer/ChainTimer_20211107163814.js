import { useReducer, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlay, faPause, faUndo, faVolumeUp, faVolumeMute, faPlus, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import TimerPage from "../../pages/Timer/TimerPage";
import ChainItem from './ChainItem';
import { ButtonsBar } from "./chainTimerStyles";
import EditTimerChain from "./EditTimerChain";

const timerToSeed = [
    {
        name: 'Push ups',
        time: 5000,
        isDone: false,
        itemIndex: 0,
    },
    {
        name: 'Jumping Jacks',
        time: 10000,
        isDone: false,
        itemIndex: 1,
    },
    {
        name: 'Squats',
        time: 20000,
        isDone: false,
        itemIndex: 2,
    },
];

const timerReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                timers: [...state.timers, action.newTimer],
            };
        case 'REMOVE': {
            const newArr = state.timers.filter((item) => item.itemIndex !== action.index);

            return {
                ...state,
                timers: newArr,
            };
        }
        case 'RESET': {
            const arrCopy = [...state.timers];
            arrCopy.forEach((item) => {
                item.isDone = false;
            })

            return {
                timers: arrCopy,
                currentTimer: 0,
            };
        }
        case 'EDIT': {
            const timers = [...state.timers];
            const timer = timers[action.index];
            timer.time = action.time;
            timer.name = action.name;
            timers[action.index] = timer;

            return {
                ...state,
                timers
            };
        }
        case 'NEXT': {
            const nextTimer = Math.min(state.currentTimer + 1, state.timers.length -1);
            const arrCopy = [...state.timers];
            arrCopy[state.currentTimer].isDone = true;

            return {
                timers: arrCopy,
                currentTimer: nextTimer,
            };
        }
        case 'PREV': {
            const prevTimer = Math.max(state.currentTimer - 1, 0);
            const arrCopy = [...state.timers];
            arrCopy[state.currentTimer].isDone = false;

            return {
                timers: arrCopy,
                currentTimer: prevTimer,
            };
        }
        case 'CHANGE_ORDER': {
            const arrCopy = [...state.timers];
            [arrCopy[action.currentIndex], arrCopy[action.newIndex]] = [arrCopy[action.newIndex], arrCopy[action.currentIndex]];

            arrCopy.forEach((item, index) => {
                item.itemIndex = index;
            })
            return {
                ...state,
                timers: arrCopy,
            };
        }
        default:
            return state;
    }
};

const initialState = {
    timers: [],
    currentTimer: 0,
};

const ChainTimer = () => {
    const [timerState, dispatch] = useReducer(timerReducer, initialState);
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [edit, setEdit] = useState(true);

    useEffect(() => {
        timerToSeed.forEach((timerItem) => {
            dispatch({
                type: "ADD",
                newTimer: timerItem,
            })
        });
    }, []);

    const moveItemUp = (index) => {
        if (index === 0) return;

        dispatch({
            type: "CHANGE_ORDER",
            currentIndex: index,
            newIndex: index - 1,
        });
    };

    const moveItemDown = (index) => {
        if (index === timerState.timers.length - 1) return;

        dispatch({
            type: "CHANGE_ORDER",
            currentIndex: index,
            newIndex: index + 1,
        });
    };

    const removeItem = (index) => {
        dispatch({
            type: "REMOVE",
            index,
        });
    };

    const nextItem = () => {
        dispatch({
            type: "NEXT",
        });
    };

    const prevItem = () => {
        dispatch({
            type: "PREV",
        });
    };

    const editItem = (index, time, name) => {
        dispatch({
            type: "EDIT",
            time,
            index,
            name,
        })
    };

    const chainCompleted = () => {
        resetTimer();
        // Add something visual to indicate it is done. Also add a sound.
    };

        
    useEffect(() => {
        if (timerState.timers.length < 1) return;
        
        let timerIntervals;

        if (!runTimer || timerState.timers.length < 1) {
            clearInterval(timerIntervals);
            return;
        }

        timerIntervals = setInterval(() => {
            setTimeElapsed(prevTime => prevTime + 100);
            
        }, 100);

        return () => clearInterval(timerIntervals);
    }, [runTimer, timerState.timers.length]);

    useEffect(() => {
        const currentTotalTime = timerState.timers[timerState.currentTimer];
        const totalTime = currentTotalTime && currentTotalTime.time;

        if (totalTime === timeElapsed && runTimer) {
            if (timerState.timers.length - 1 === timerState.currentTimer) {
                chainCompleted();
                return;
            }

            setTimeElapsed(0);
            dispatch({
                type: "NEXT"
            });
        }
    }, [timeElapsed, timerState.currentTimer, timerState.timers, runTimer]);

    const resetTimer = () => {
        setRunTimer(false);
        setTimeElapsed(0);
        dispatch({
            type: "RESET",
        });
    };

    return (
        <TimerPage align="flex-start">
            <div>
                {edit ? (
                    <>
                        <EditTimerChain
                            timers={timerState.timers}
                            currentTimer={timerState.currentTimer}
                            moveItemDown={moveItemDown}
                            moveItemUp={moveItemUp}
                            removeItem={removeItem}
                            editItem={editItem}
                        />
                    </>
                ) : (
                    <ButtonsBar>
                        <Button onClick={() => setRunTimer(prev => !runTimer)} color="blue"><FontAwesomeIcon icon={!runTimer ? faPlay : faPause} /></Button>
                        <Button onClick={() => resetTimer()} color="blue"><FontAwesomeIcon icon={faUndo} /></Button>
                        <Button onClick={() => prevItem()} color="purple"><FontAwesomeIcon icon={faStepBackward} /></Button>
                        <Button onClick={() => nextItem()} color="purple"><FontAwesomeIcon icon={faStepForward} /></Button>
                        <Button onClick={() => console.log()} color="pink"><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button onClick={() => setIsMuted(prev => !prev)} color="red"><FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} /></Button>
                    </ButtonsBar>
                )}
            </div>
        </TimerPage>
    );
};

export default ChainTimer;