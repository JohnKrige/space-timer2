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
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: center;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    padding: 20px;
    border: 8px solid white;
    height: fit-content;
    border-radius: 15px;
    width: 400px;

    & h2 {
        font-size: 36px;
    }
`;

export const TimeInput = styled.div`
    max-width: 80px;
    padding: 20px;

    & label {
        text-align: start;
    }

    & input {
        max-width: 70px;
        border-radius: 10px;
    }
`;

export const TimeInputs = styled.form`
    display: flex;
    margin: 20px 0;
    justify-content: center;
`;

