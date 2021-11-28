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
    margin-top: 50px;
    padding: 20px;
    border: 2px solid white;
    height: fit-content;
    border-radius: 15px;

    & h2 {
        font-size: 36px;
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

    & input {
        max-width: 50px;
    }
`;

export const TimeInputs = styled.div`
    display: flex;
    margin: 20px 0;
`;

