import styled from "styled-components";

export const MainTimerContainer = styled.div`
    border: 8px solid white;
    border-radius: 30px;
    width: 250px;
    padding: 30px;
    color: white;
`;

export const MainTimeDisplay = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin-bottom: ${props => props.marginBottom || "30"}px;
`;

export const MainTimeDisplayComponent = styled.div`
    padding: 10px;
    margin: 0px 4px;
    color: black;
    background-color: white;
    border-radius: 10px;
    font-size: 36px;
    flex: 1;
`;

export const RepeaterContainer = styled`
    border: 8px solid white;
    border-radius: 30px;
    width: 200px;
    padding: 20px;
    color: white;
`;


