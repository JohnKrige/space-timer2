import styled from 'styled-components';

export const ChainItemContainer = styled.div`
    // border: ${props => props.isActive ? '10px solid white' : ' '};
    width: 700px;
    margin: 30px 0;
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
    font-size: 16px;
    text-align: center;
`;

export const ButtonsBar = styled.div`
    margin: 50px 0;
`;

export const TimeDisplayLabel = styled.div`
    background-color: #592d7e;
    border-radius: 10px;
    padding: 2px;
    width: 30px;
    margin: 0 2px 0 2px;
    display: inline-block;
    font-size: 16px;
`;

export const MoveLabel = styled.div`
    background-color: #821e66;
    padding: 5px 10px;
    border-radius: 10px;
    margin:0;
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

