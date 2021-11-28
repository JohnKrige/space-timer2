import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: ${props => props.color === "blue" ? "rgb(47,60,150)" : props.color === "purple" ? "#6a2774" : "#a41253"};
    border: none;
    color: white;
    padding: 10px;
    font-size: 24px;
    border-radius: ${props => props.round ? "50%" : "15%"};
    margin: 0 5px;
`;