import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;
    width: full;

    &:focus{
        outline: none;
    }
`;

export const ButtonImage = styled.div`
    margin-right: 8px;
    background-color: transparent;
`;

export const Title = styled.div`
    margin-left: 8px;
    width: full;
    text-align: left;
`;

export const Body = styled.div`
    margin: 32px 16px 16px 16px;
    overflow: hidden;
    transition: all 0.3s ${props => !props.isOpen ? "ease-out" : "ease-in"};
    max-height: ${props => props.isOpen ? '800px' : '0px'};
    opacity: ${props => props.isOpen ? "1" : "0"};
`;
