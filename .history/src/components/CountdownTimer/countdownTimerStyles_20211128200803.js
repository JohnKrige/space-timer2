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
  0% { opacity: 0;}
  16% {opacity: 1;}
  32% { opacity: 0;}
  48% {opacity: 1;}
  64% { opacity: 0;}
  82% {opacity: 1;}
  100% {opacity: 0;}
`;

export const Message = styled.div`
     position: absolute;
     top: 40px;
      animation: ${rotate} ${props => props.duration || '5000'}ms;
      color: rgba(164, 18, 83, 1);
      font-weight: bold;
`;
