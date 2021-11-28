import { useReducer, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlay, faPause, faUndo, faVolumeUp, faVolumeMute, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import ChainTimerItem from "./ChainTimerItem";
import TimerPage from "../../pages/Timer/TimerPage";
import { ButtonsBar, ChainTimerPage, DeleteError, AccordionContainer, AccordionBody, WhatIs } from "./chainTimerStyles";
import EditTimerChain from "./EditTimerChain";
import { getHMS } from "../../helpers/getHMS";
import { neatTimeDisplay } from "../../helpers/timeDisplay";

import Accordion from '../Accordion/Accordion';

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
            const newArr = state.timers.length > 1 ? state.timers.filter((item) => item.itemIndex !== action.index) : state.timers;
            newArr.forEach((item, index) => {
                item.itemIndex = index;
            });

            const deleteError = state.timers.length <= 1 && "There must be at least one item. You can always it"
            
            return {
                ...state,
                timers: newArr,
                deleteError,
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
            console.log(action);
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
            
        case 'DELETE_ERROR_RESET': {
            return {
                    ...state,
                    deleteError: undefined,
                }
            }
        default:
            return state;
    }
};

const initialState = {
    timers: initialTimers,
    currentTimer: 0,
    deleteError: undefined,
};

const ChainTimer = () => {
    const [timerState, dispatch] = useReducer(timerReducer, initialState);
    const [runTimer, setRunTimer] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [edit, setEdit] = useState(true);
    const [done, setDone] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

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
        });
        dispatch({
            type: 'DELETE_ERROR_RESET',
        });
    };

    const chainCompleted = () => {
        resetTimer();
        setDone(true);
    };

    const editTimerHandler = () => {
        setEdit(false);
        dispatch({
            type: 'DELETE_ERROR_RESET'
        });
    }

        
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
        setDone(false);
        dispatch({
            type: "RESET",
        });
    };

    let currentNumber;
    let currentTimer;
    let nextTimer;
    let currentTimeRemainingMS;
    let totalTimers;
    let currentName;


    if (timerState.timers.length > 0) {
        currentNumber = timerState.currentTimer;
        currentTimer = timerState.timers[currentNumber];
        nextTimer = timerState.timers[Math.min(currentNumber + 1, timerState.timers.length - 1)];
        currentName = currentTimer.name || "";
        currentTimeRemainingMS = currentTimer.time - timeElapsed;
        totalTimers = timerState.timers.length;
    };

    useEffect(() => {
        if (timeElapsed % 1000 !== 0) return;
        const [h, m, s] = getHMS(currentTimeRemainingMS);
        setMinutes(neatTimeDisplay(m));
        setSeconds(neatTimeDisplay(s));
    }, [currentTimeRemainingMS]);

    const accordionTitle = <h3>What is a chain timer?</h3>;
    const accordionBody = (
        <AccordionBody>
            <WhatIs>
                <p>
                    The chain timer is basically many individual timers that run consecutively . i.e. When you press start, the first one fires off, and when that's done the second
                    will automatically start.
                </p>
                <p>
                    Each timer's name and time duration is customizable. Workouts are a good example of how the chain timer can come in handy. You may want to
                    do 60 seconds of squats, then rest for 15 seconds and move on to 45 seconds of calf raises etc (you get the picture). Set the chain timer and press done to get started.
                </p>
            </WhatIs>
        </AccordionBody>
    );

    return (
        <TimerPage justify="flex-start">
            <h1 className="PageTitle">{edit ? 'Set chain timer' : 'Chain timer'}</h1>

            <AccordionContainer>
                <Accordion title={accordionTitle}>
                    {accordionBody}
                </Accordion>
            </AccordionContainer>

            <ChainTimerPage>
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
                            const closeEdit={() => editTimerHandler()}
                        />
                        {!done && timerState.deleteError && <DeleteError>{timerState.deleteError}</DeleteError>}
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
                                <ChainTimerItem name={currentName} currentItem={currentNumber + 1} totalItems={totalTimers} mins={minutes} secs={seconds} NextItemName={nextTimer.name} isLast={currentNumber === (totalTimers - 1)}/>
                            )
                                :
                            (
                                <div>Done!</div>
                            )
                            }
                    </>
                )}
            </ChainTimerPage>
        </TimerPage>
    );
};

export default ChainTimer;