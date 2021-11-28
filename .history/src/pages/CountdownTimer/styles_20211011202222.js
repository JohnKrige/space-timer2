import styled from 'styled-components';

export const CountdownTimerPage = styled.div`
    overflow: hidden;
    height: 100vh;
    max-height: 700px;
    width: 100vw;
    max-width: 1000px;
    background: black;
    display: flex;
    justify-content: center;
`;

background: ${ props => props.color === "blue" ? "rgb(47,60,150)" : "rgba(164,18,83,1)" };