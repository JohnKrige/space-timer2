import styled from 'styled-components';

export const ChainItemContainer = styled.div`
    border: ${props => props.isActive ? '10px solid white' : ' '};
    width: 700px;
    margin: 30px 0;
    border-radius: 20px;
    padding: 10px 10px;
    background: rgb(47,60,150);
    background: linear-gradient(90deg, rgba(47,60,150,1) 40%, rgba(164,18,83,1) 100%);
    box-sizing: border-box;

    svg {
        cursor: pointer;
    }
`;

export const ChainItemBackground = styled.div`
    height: 100%;
    background-color: black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
`;


export const TimeDisplayContainer = styled.div`
    display: flex;
`;

export const TimeDisplay = styled.div`
    background-color: white;
    border-radius: 10px;
    margin: 3px 3px 0 2px;
    color: black !important;
    padding: 5px;
    font-weight: bold;
    font-size: 32px;
    text-align: center;
`;

export const ButtonsBar = styled.div`
    margin: 50px 0;
`;

export const TimeDisplayLabel = styled.div`
    background-color: #592d7e;
    border-radius: 10px;
    padding: 5px;
    width: 30px;
    margin: 0 2px 3px 2px;
    display: inline-block;
`;

export const MoveLabel = styled.div`
    background-color: #821e66;
    padding: 5px 10px;
    border-radius: 10px;
    margin: 5px 0;
`;

export const DeleteButton = styled.button`
    border: none;
    background: #a41253;
    widthL 40px;

`;