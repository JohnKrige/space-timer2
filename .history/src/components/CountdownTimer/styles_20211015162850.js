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
    background-color: rgb(47,60,150);
`;

export const TimeDisplaySection = styled.div`
    flex: 1;

    & p{
        // color: ${props => props.color === "red" ? "#a41253" : props.color === "purple" ? "#6a2774" : "rgb(47,60,150)" };
        color: white;
        margin-bottom: 5px;
    }
`;

export const Experiment = styled.div`
  background-color: black;
  border-radius: 20%;
  padding: 30px;
`;


