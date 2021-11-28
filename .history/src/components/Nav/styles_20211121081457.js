import styled from 'styled-components';

export const NavItem = styled.li`
    cursor: pointer;
    color: white;
    font-size: 12px;
    flex: 1;
    padding-top: 10px;
    background-color: green;
    border-radius: 50%;


    @media (min-width: 1024px) {
        margin: 20px 40px 5px 40px;
    }


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
    justify-content: space-between;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: green;
`;