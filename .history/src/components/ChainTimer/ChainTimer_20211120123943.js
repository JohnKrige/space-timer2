import { useReducer, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlay, faPause, faUndo, faVolumeUp, faVolumeMute, faPlus, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import ChainTimerItem from "./ChainTimerItem";
import TimerPage from "../../pages/Timer/TimerPage";
import { ButtonsBar } from "./chainTimerStyles";
import EditTimerChain from "./EditTimerChain";
import { getHMS } from "../../helpers/getHMS";
import { neatTimeDisplay } from "../../helpers/timeDisplay";

const initialTimers = [
    {
        name: 'Push ups',
        time: 5000,
        isDone: false,
        itemIndex: 0,
    },
    {
        name: 'Jumping Jacks',
        time: 3000,
        isDone: false,
        itemIndex: 1,
    },
    {
        name: 'Squats',
        time: 2000,
        isDone: false,
        itemIndex: 2,
    },
];

const timerReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const newTimer = {
                name: action.name,
                time: action.time,
                isDone: false,
                itemIndex: state.timers.length,
            };

            return {
                ...state,
                timers: [...state.timers, newTimer],
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
    timers: initialTimers,
    currentTimer: 0,
};

const ChainTimer = () => {
    const [timerState, dispatch] = useReducer(timerReducer, initialState);
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [edit, setEdit] = useState(true);
    const [done, setDone] = useState(false);

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

    const addItem = (time, name) => {
        dispatch({
            type: "ADD",
            time,
            name,
        })
    };

    const chainCompleted = () => {
        resetTimer();
        setDone(true);
    };

        
    useEffect(() => {
        // if (timerState.timers.length < 1) return;
        
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

    const currentNumber = timerState.currentTimer;
    const currentTimer = timerState.timers[currentNumber];
    const nextTimer = timerState.timers[currentNumber + 1];
    const currentName = currentTimer.name;
    const currentTimeRemainingMS = currentTimer.time - timeElapsed;
    const totalTimers = timerState.timers.length;

    const [h, m, s] = getHMS(currentTimeRemainingMS);
    const minutes = neatTimeDisplay(m);
    const seconds = neatTimeDisplay(s);

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
                            addTimer={addItem}
                            const closeEdit={() => setEdit(false)}
                        />
                    </>
                ) : (
                    <>
                        <ButtonsBar>
                            <Button onClick={() => setRunTimer(prev => !runTimer)} color="blue"><FontAwesomeIcon icon={!runTimer ? faPlay : faPause} /></Button>
                            <Button onClick={() => resetTimer()} color="blue"><FontAwesomeIcon icon={faUndo} /></Button>
                            <Button onClick={() => prevItem()} color="purple"><FontAwesomeIcon icon={faStepBackward} /></Button>
                            <Button onClick={() => nextItem()} color="purple"><FontAwesomeIcon icon={faStepForward} /></Button>
                            <Button onClick={() => setEdit(true)} color="pink"><FontAwesomeIcon icon={faEdit} /></Button>
                            <Button onClick={() => setIsMuted(prev => !prev)} color="red"><FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} /></Button>
                        </ButtonsBar>
                            {!done ? (
                                <ChainTimerItem name={currentName} currentItem={currentNumber + 1} totalItems={totalTimers} mins={minutes} secs={seconds} nextItem={nextTimer.name} />
                            )
                                :
                            (
                                <div>Done!</div>
                            )
                        }
                    </>
                )}
            </div>
        </TimerPage>
    );
};

export default ChainTimer;