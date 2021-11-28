import styled from 'styled-components';

export const TimerPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: ${props => props.align || "center"}
    flex-grow: 1;
`;

