import styled from "styled-components";

const topOffset = 200;

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: green;
    position: absolute;
    top: ${topOffset};
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    margin-top: -200px;
`;
