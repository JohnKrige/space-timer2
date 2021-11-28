import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';


 const TimerPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.justify || "center"};
    flex-grow: 1;
    margin-top: 20px;
    overflow-x: hidden;

    
    @media (min-width: 1024px) {
        margin-top: 40px;
    }
`;

const PageTransition = ({ children }) => {
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 100, x: 0 }} animate={{ opacity: 1, y: 0, x: 0 }}>
                {children}
            </motion.div>
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

