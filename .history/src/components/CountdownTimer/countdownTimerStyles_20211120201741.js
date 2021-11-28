import styled from 'styled-components';

export const CountdownTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: end;

     @media (min-width: 1024px) {
         flex-direction: row;
     }
`;