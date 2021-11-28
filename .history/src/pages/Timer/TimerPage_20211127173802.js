import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';


 const TimerPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.justify || "center"};
    flex-grow: 1;
    margin-top: 20px;
    
    @media (min-width: 1024px) {
        margin-top: 40px;
    }
`;

const PageTransition = (children) => {
    return (
        <AnimatePresence>
            <motion.div>{children}</motion.div>
        </AnimatePresence>
    )
};

const TimerPage = ({align, justify, children}) => {
    return (
        <TimerPageStyle justify={justify} align={align}>
            <PageTransition>{children}</PageTransition>
        </TimerPageStyle>
    )
}

export default TimerPage; 

