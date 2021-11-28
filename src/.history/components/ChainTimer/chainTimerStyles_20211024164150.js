import styled from 'styled-components';

export const ChainItemContainer = styled.div`
    border: ${props => props.isActive ? '5px solid #a41253' : ' 3px solid white'};
    width: 700px;
    margin: 30px 0;
    border-radius: 10px;
    padding: 15px 15px;

    svg {
        cursor: pointer;
    }
`;

export const ChainItemBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
`;


export const TimeDisplayContainer = styled.div`
    display: flex;
`;

export const TimeDisplay = styled.div`
    background-color: white;
    border-radius: 10px;
    margin: 3px 2px 0 2px;
    color: black !important;
    padding: 5px;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
`;

export const ButtonsBar = styled.div`
    margin: 50px 0;
`;
