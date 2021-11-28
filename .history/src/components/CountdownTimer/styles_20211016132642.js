import styled from "styled-components";

export const MainTimerContainer = styled.div`
    border: 8px solid white;
    border-radius: 30px;
    width: 400px;
    padding: 15px;
    color: white;
    background: rgb(47,60,150);
    background: linear-gradient(90deg, rgba(47,60,150,1) 0%, rgba(164,18,83,1) 100%);
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
    width: 200px;
    padding: 10px;
    color: white;
    background: rgb(47,60,150);
    background: linear-gradient(90deg, rgba(47,60,150,1) 0%, rgba(164,18,83,1) 100%);
    margin-left: 50px;
`;

export const TimeDisplaySection = styled.div`
    flex: 1;

    & p{
        font-size: ${props => props.fontSize || 'auto'};
        color: white;
        margin-bottom: 5px;
    }
`;

export const TimerFace = styled.div`
  background-color: black;
  border-radius: 15%;
  padding: ${props => props.padding || '30px'};

  & h4{
    margin-bottom: 10px;
  }
`;


