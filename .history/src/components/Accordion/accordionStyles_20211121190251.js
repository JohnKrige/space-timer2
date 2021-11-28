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
`;

export const Title = styled.div`
    margin-left: 8px;
    width: full;
    text-align: left;
`;

export const Body = styled.div`
    margin: 32px 16px 16px 16px;
    overflow: hidden;
    transition: all 1s ${props => props.isOpen ? "ease-out" : "ease-in"};
    max-height: ${props => props.isOpen ? '1000px' : '0px'}
`;
