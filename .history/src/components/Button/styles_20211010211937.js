import styled from 'styled-components';

export const ButtonContainer = styled.button`
    border: ${props => props.color === "blue" ? "1px solid #0C34EE" : "1px solid #f60000" };
    color: white;
    padding: 5px;
    font-size: 24px;
    border-radius: 8%;
`;