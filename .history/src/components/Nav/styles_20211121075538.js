import styled from 'styled-components';

export const NavItem = styled.li`
    margin: 20px 40px 5px 40px;
    cursor: pointer;
    color: white;
    font-size: 12px;
    position: fixed;
    bottom: 0;
    width: 100vw;


    & a:hover {
        color: #821e66;
        font-weight: bold;
    }

    & a{
        color: ${props => props.selected ? "#821e66" : "white"};
        font-weight: ${props => props.selected ? "bold" : "auto"};
        text-decoration-thickness: 4px;
    }
`;

export const NavList = styled.ul`
    display: flex;
`;