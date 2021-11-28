import styled from 'styled-components';

export const NavItem = styled.li`
    cursor: pointer;
    font-size: 14px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.selected ? "#821e66" : "rgba(47,60,150,1)"};
    padding: 10px 0;
    border-radius: 15px 15px 0 0;


    @media (min-width: 1024px) {
        margin: 20px 40px 5px 40px;
        flex: 0;
    }
    
    & div {
        font-size: ${props => props.selected && "16px"};
        text-align: center;
        color: white;

        @media (min-width: 1024px) {
            font-size: ${props => props.selected ? "28" : "24"}px;
            color: white;
        }
    }

    & div:hover {
        @media (min-width: 1024px) {
       color: #821e66;
        }
    }

    & a{
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
    // padding: 10px 0;
    border-radius: 20px 20px 0 0;
    border-bottom: none;
    box-sizing: border-box;
    // background: rgb(251,230,245);
    // background: linear-gradient(0deg, rgba(251,230,245,1) 59%, rgba(255,255,255,1) 100%);

    @media (min-width: 1024px) {
        position: static;
        background: transparent;
        justify-content: center;
    }
}`
