import styled from 'styled-components';

 const TimerPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.align || "center"};
    flex-grow: 1;
`;

export default TimerPage; 

