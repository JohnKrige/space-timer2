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
    column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
`;


export const TimeDisplayContainer = styled.div`
    display: flex;
    background-color: white;
    border: 5px solid #592d7e;
    padding: 10px;
    border-radius: 10px;
`;

export const TimeDisplay = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 3px solid #592d7e;
    margin: 3px 3px 0 2px;
    color: #592d7e !important;
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
    background-color: #a41253;
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;display: flex;
    justify-content: center;
    align-items: center;
`;

export const NameLabel = styled.div`
    background-color: white;
    color: rgba(47,60,150,1);
    flex-grow: 1;
    padding: 5px;
    border: 3px solid white;
    font-weight: bold;
    border-radius: 10px;
`;