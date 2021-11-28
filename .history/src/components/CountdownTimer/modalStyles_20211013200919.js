import styled from "styled-components";

const topOffset = 120;

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
    position: absolute;
    top: ${topOffset}px;
    left: 0;
    display: flex;
    justify-content: center;
`;

export const ModalContent = styled.div`
    border: 2px solid white;
    height: fit-content;

    & TimeInputs {
        display: flex;
        flex-direction: column;
        max-width: 80px;
        padding: 20px;

    & label {
        text-align: start;
    }
    }
`;

export const TimeInput = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80px;
    padding: 20px;

    & label {
        text-align: start;
    }
`;

export const TimeInputs = styled.div`
    display: flex;
`;
