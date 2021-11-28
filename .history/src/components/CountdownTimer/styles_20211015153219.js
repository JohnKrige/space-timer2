import styled from "styled-components";

export const MainTimerContainer = styled.div`
    border: 8px solid white;
    border-radius: 30px;
    width: 350px;
    padding: 30px;
    color: white;
`;

export const MainTimeDisplay = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin-bottom: ${props => props.marginBottom || "30"}px;
    background: red;
`;

export const MainTimeDisplayComponent = styled.div`
    padding: ${props => props.padding || '10'}px;
    margin: 0px 4px;
    color: black;
    background-color: white;
    border-radius: 10px;
    font-size: ${props => props.fontSize || '54'}px;
    flex: 1;
`;

export const RepeaterContainer = styled.div`
    border: 4px solid white;
    border-radius: 30px;
    width: 278px;
    padding: 20px;
    color: white;
`;


