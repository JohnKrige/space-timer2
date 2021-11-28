import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;
    width: full;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;

    &:focus{
        outline: none;
    }
`;

export const ButtonImage = styled.div`
    margin-right: 8px;
`;

export const Title = styled.div`
    margin-left: 8px;
    width: full;
    text-align: left;
`;

export const Body = styled.div`
    margin: ${props => !props.isOpen ? "0" : "16px"};
    overflow: hidden;
    transition: all 0.3s ${props => !props.isOpen ? "ease-in-out" : "ease-in-out"};
    max-height: ${props => props.isOpen ? '800px' : '0px'};
    opacity: ${props => props.isOpen ? "1" : "0"};
`;

export const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
