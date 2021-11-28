import styled from 'styled-components';

export const Button = styled.div`
    display: flex;
    align-items: center;
    width: full;

    &:focus{
        outline: none;
    }
`;

export const Title = styled.div`
    margin-left: 8px;
    width: full;
    text-align: left;
`;

export const Body = styled.div`
    margin: 32px 16px 16px 16px;
    overflow: hidden;
    transition: all 0.5s east-in-out;
    max-height: ${props => props.isOpen ? '1000px' : '0px'}
`;
