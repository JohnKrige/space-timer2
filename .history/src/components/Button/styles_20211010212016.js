import styled from 'styled-components';

export const ButtonContainer = styled.button`
    border: 5px solid ${props => props.color === "blue" ? "#0C34EE" : "#f60000" };
    color: white;
    padding: 5px;
    font-size: 24px;
    border-radius: 8%;
    background-color: transparent;
`;