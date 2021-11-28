import styled from 'styled-components';

export const ButtonContainer = styled.button`
    // background-color: #4842f5;
    background-color: ${props => props.color === "blue" ? "#0C34EE" : "#f60000 " };
    color: white;
    padding: 5px;
    font-size: 24px;
    border: none;
    border-radius: 8%;
`;