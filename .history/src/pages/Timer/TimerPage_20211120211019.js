import styled from 'styled-components';

 const TimerPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.justify || "center"};
    flex-grow: 1;
    margin-top: 20px;
    
    @media (min-width: 1024px) {
        margin-top: 40px;
    }
`;

const TimerPage = ({align, justify, children}) => {
    return (
        <TimerPageStyle justify={justify} align={align}>
            {children}
        </TimerPageStyle>
    )
}

export default TimerPage; 

