import styled from 'styled-components';

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

const rotate = styled.keyframes`
  from {
    left: -200px;
  }

  to {
    left: 200px;
  }
`;

export const Started = styled.div`
     position: absolute;
     top: 40px;
      animation: ${rotate} 0.3s;
`;
