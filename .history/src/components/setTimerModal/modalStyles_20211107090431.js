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

export const ModalBackground = styled.div`
    position: relative;
    margin-top: 100px;
    width: 500px;
    background: rgb(47,60,150);
    background: linear-gradient(125deg, rgba(47,60,150,1) 0%, rgba(164,18,83,1) 100%);
    border-radius: 15px;
    border: 4px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
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
    padding: 20px;
    background-color: ${props => props.color === "red" ? "#a41253" : props.color === "purple" ? "#592d7e" : "#2f3c96"};
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

export const NameInput = styled.div`
    display: flex;
    align-items: center;
    color: black;
    margin-top: 30px;

    & label {
        margin-right: 10px;
        color: #2f3c96;
        font-weight: bold;
        font-size: 20px;
    }

    & input {
        padding: 5px;
        border: 2px solid #2f3c96;
        border-radius: 5px;
        flex-grow: 1;
    }
`;

