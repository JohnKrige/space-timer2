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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 100px;
    padding: 20px;
    border: 4px solid white;
    height: fit-content;
    border-radius: 15px;
    width: 500px;
    height: 340px;
    background: rgba(255,255,255, 0.1);

    & h2 {
        font-size: 36px;
    }
`;

export const TimeInput = styled.div`
    max-width: 80px;
    padding: 20px;
    background-color: ${props => props.color === "red" ? "" : props.color === "purple" ? "" : "#2f3c96"};
    border-radius: 10px;
    margin: 0px 5px;

    & label {
        text-align: start;
    }

    & input {
        border: none;
        max-width: 70px;
        border-radius: 2px;
        padding: 2px 3px;
    }
`;

export const TimeInputs = styled.form`
    display: flex;
    margin: 20px 0;
    justify-content: center;
`;

export const CloseModal = styled.div`
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    right : -45px;
    color: black;
    cursor: pointer;
`;

