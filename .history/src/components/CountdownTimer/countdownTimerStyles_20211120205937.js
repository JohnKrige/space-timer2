import styled from 'styled-components';

export const CountdownTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

     @media (min-width: 1024px) {
         flex-direction: row;
     }
`;