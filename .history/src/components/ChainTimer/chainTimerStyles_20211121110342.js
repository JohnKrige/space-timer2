import styled from 'styled-components';

export const ChainItemContainer = styled.div`
    // border: ${props => props.isActive ? '10px solid white' : ' '};
    width: 550px;
    margin: 10px 0;
    border-radius: 20px;
    padding: 10px;
    background: rgb(47,60,150);
    background: linear-gradient(90deg, rgba(47, 60, 150, 1) 50%, rgba(164, 18, 83, 1) 100%);
    box-sizing: border-box;
    font-size: 16px;

    svg {
        cursor: pointer;
    }
`;

export const ChainItemBackground = styled.div`
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    display: grid;
    column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
`;


export const TimeDisplayContainer = styled.div`
    display: flex;
    background-color: white;
    border: 5px solid #592d7e;
    padding: 5px;
    border-radius: 10px;
`;

export const TimeDisplay = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 3px solid #592d7e;
    margin: 3px 3px 0 2px;
    color: #592d7e !important;
    padding: 2px;
    font-weight: bold;
    text-align: center;
`;

export const ButtonsBar = styled.div`
    margin: 10px 0 30px 0;
    display: flex;
    justify-content: ${props => props.justify || 'center'};
    align-items: 'center';
`;

export const TimeDisplayLabel = styled.div`
    background-color: #592d7e;
    border-radius: 10px;
    padding: 2px;
    width: 30px;
    margin: 0 2px 0 2px;
    display: inline-block;
`;

export const MoveLabel = styled.div`
    background-color: #821e66;
    padding: 3px 10px;
    border-radius: 10px;
    margin-bottom: 2px;
`;

export const NameLabel = styled.div`
    background-color: white;
    color: rgba(47,60,150,1);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: 5px solid rgba(47,60,150,1);
    font-weight: bold;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ChainItemButtons = styled.div`
    display: flex;
`;

export const ChainItemButton = styled.button`
    border: none;
    background-color: ${props => props.colorInvert ? 'white' : '#a41253'};
    width: 40px;
    height: 40px;
    color: ${props => props.colorInvert ? '#a41253' : 'white'};
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

export const ItemName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TimeDisplayMain = styled.div`
    display: flex;
`;

export const TimeDisplaySection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 10px;
    border: 3px solid white;
    padding-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
`;

export const ItemNameTitle = styled.div`
    font-size: 72px;
`;

export const ItemNameNumber = styled.div`
    margin-right: 10px;
`;

export const ChainTimerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const MinutesAndSeconds = styled.div`
    font-size: 72px;
    margin-top: 20px;
`;

export const MinsAndSecsHeading = styled.div`
    padding: 10px 50px 10px 50px;
    background-color: ;
    background: rgb(47,60,150);
    background: linear-gradient(90deg, rgba(47, 60, 150, 1) 50%, rgba(164, 18, 83, 1) 100%);
`;

export const NextItem = styled.div`
    font-size: 30px;
`;

export const UpNext = styled.div`
    color: rgba(164, 18, 83, 1);
    border-radius: 10px;
    font-weight: bold;
`;

export const EditTimerContainer = styled.div
`
    display: flex;
    flex-direction: column;
`;

export const WhatIsContainer = styled.div`

    @media (min-width: 1024px) {
        max-width: 500px;
    }
`;

