import styled from "styled-components";

const topOffset = 120;

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100%;
    overflow: hidden;
    background-color: black;
    position: absolute;
    top: ${topOffset}px;
    left: 0;
    display: flex;
    justify-content: center;
`;

export const ModalBackground = styled.div`
    position: relative;
    margin: 70px;
    background: rgb(47,60,150);
    background: linear-gradient(125deg, rgba(47,60,150,1) 0%, rgba(164,18,83,1) 100%);
    border-radius: 15px;
    border: 4px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    @media(min-width: 1024px){
        width: 500px;
        margin-top: 100px;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    border-radius: 15px;
    background: rgba(255, 255, 255);
    border: 4px solid black;
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;

    & h2 {
        font-size: 44px;
        color: #592d7e;
        //   font-family: 'Audiowide', cursive;
    }
`;

export const TimeInput = styled.div`
    max-width: 80px;
    padding: 10px;
    background-color: ${props => props.color === "red" ? "#a41253" : props.color === "purple" ? "#592d7e" : "#2f3c96"};
    border-radius: 10px;
    margin: 0px 5px;

    @media (min-width: 1024px) {
        padding: 20px;
    }

    & label {
        text-align: start;
    }

    & input {
        margin-bottom: 3px;
        border: none;
        max-width: 50px;
        border-radius: 2px;
        padding: 2px 3px;
    }
`;

export const TimeInputs = styled.form`
    display: flex;
    margin: 20px 0;
    justify-content: center;
    font-size: 14px;

    @media(min-width: 1024px) {
        font-size: 
    }
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
    color: black;
    cursor: pointer;
    top: -40px;
    right : -35px;

    @media(min-width: 1024px) {
        top: -50px;
        right : -45px;
    }
`;

export const NameInput = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 5px;
    padding: 10px;
    background: #2f3c96;
    border-radius: 10px;

    @media(min-width: 1024px) {
        padding: 20px 40px;
        margin-top: 30px;
    }

    & label {
        margin-top: 3px;
        font-size: 20px;
    }

    & input {
        padding: 5px;
        border: none;
        border-radius: 5px;
    }
`;

export const ModalTitle = styled.div`
    font-size: 24px;
    color: #592d7e;

    @media(min-width: 1024px) {
        font-size: 32px;
        font-weight: bold;
    }
`;

