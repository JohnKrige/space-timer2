import { ButtonContainer } from './styles';

const Button = (props) => {
    return (
        <ButtonContainer onClick={props.onClick}>
            {props.children}
        </ButtonContainer>
    )
};

export default Button;