import styled from 'styled-components';

 const TimerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.align || "center"};
    flex-grow: 1;
`;

export default TimerPage; 

