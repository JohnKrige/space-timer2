import styled from 'styled-components';

export const ButtonContainer = styled.button`
    background: ${props => props.color === "blue" ? "rgb(47,60,150)" : props.color === "purple" ? "#592d7e" : props.color === "pink" ? "#821e66" : "#a41253"};
    border: none;
    color: white;
    padding: 10px;
    font-size: 24px;
    border-radius: ${props => props.rounded ? "50%" : "10px"};
    margin: 0 5px;
    cursor: pointer;
        display: flex;
    justify-content: center;
    align-items: center;
`;

export const DeleteButtonContainer = styled.div`

`;