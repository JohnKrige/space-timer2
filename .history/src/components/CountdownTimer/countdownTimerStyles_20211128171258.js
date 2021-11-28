import styled, {keyframes } from 'styled-components';
 
export const CountdownTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

     @media (min-width: 1024px) {
         flex-direction: row;
     }
`;

export const Header = styled.h1`
     margin-bottom: 40px;

     @media (min-width: 1024px) {
        margin-bottom: '40px'
     }
`;

export const HeaderContainer = styled.div`
     position: relative;
`;

const rotate = keyframes`
  from {
    left: 0;
  }

  to {
    left: 50%;
  }
`;

export const Started = styled.div`
     position: absolute;
     top: 40px;
      animation: ${rotate} 5s;
`;
