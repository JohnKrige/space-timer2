import styled from "styled-components";

const topOffset = 120;

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: green;
    position: absolute;
    top: ${topOffset}px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    margin-top: -${topOffset}px;
    border: 2px solid white;
`;

export const TimeInput = styled.div`
    display: flex;
    flex-direction: column;
`;
