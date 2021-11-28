import styled from "styled-components";

export const MainTimerContainer = styled.div`
    border: 8px solid white;
    border-radius: 15px;
    padding: 15px;
    color: white;
    background: rgb(47,60,150);
    background: linear-gradient(90deg, rgba(47,60,150,1) 0%, rgba(164,18,83,1) 100%);

    @media (min-width: 1024px) {
      width: 400px;
    }
`;

export const MainTimeDisplay = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin-bottom: ${props => props.marginBottom || "30"}px;
`;

export const MainTimeDisplayComponent = styled.div`
    padding: ${props => props.padding || '5'}px;
    margin: 0px 4px;
    color: black;
    background-color: white;
    border-radius: 15px;
    font-size: ${props => props.fontSize || '42'}px;

    @media (min-width: 1024px) {
      font-size: ${props => props.fontSize || '54'}px;
      padding: ${props => props.padding || '10'}px;
    }
`;

export const RepeaterContainer = styled.div`
    border: 4px solid white;
    border-radius: 10px;
    width: 180px;
    padding: 10px;
    color: white;
    background: rgb(47,60,150);
    background: linear-gradient(90deg, rgba(47,60,150,1) 0%, rgba(164,18,83,1) 100%);
    margin-left: 50px;
`;

export const TimeDisplaySection = styled.div`
    min-width: 33%;

    & p{
        font-size: 16px;
        font-weight: 400;
        color: white;
        margin-bottom: 5px;

        @media(min-width: 1024px) {
          font-size: ${props => props.fontSize || 'auto'};
        }
    }
`;

export const TimerFace = styled.div`
  background-color: black;
  border-radius: 10px;
  padding: ${props => props.padding || '15px'};

  @media(min-width: 400px) {
    padding: ${props => props.padding || '30px'};
  }

  & h4{
    margin-bottom: 10px;
  }
`;

export const DisplayMs = styled.div`
  margin-bottom: 25px;
  margin-top: 15px;
  
  & div{
      display: inline;
        background-color: white;
    padding: 3px;
    border-radius: 5px;
    color: black;
    font-weight: bold;
  }
`;


