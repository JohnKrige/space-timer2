import styled from 'styled-components';

export const NavItem = styled.li`
    cursor: pointer;
    font-size: 12px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (min-width: 1024px) {
        margin: 20px 40px 5px 40px;
    }
    
    & div {
        color: rgba(47,60,150,1);
        font-weight: bold;
    }

    & div:hover {
        color: #821e66;
        font-weight: bold;
    }

    & a{
        color: ${props => props.selected ? "#821e66" : "white"};
        font-size: ${props => props.selected && "14px"};
        font-weight: ${props => props.selected && "bold"};
        text-decoration-thickness: 4px;
    }
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 10px 0;
    border-radius: 20px 20px 0 0;
    border-bottom: none;
    box-sizing: border-box;
    background: rgb(251,230,245);
background: linear-gradient(0deg, rgba(251,230,245,1) 0%, rgba(255,255,255,1) 100%);
}`