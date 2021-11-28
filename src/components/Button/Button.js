import { ButtonContainer } from './styles';

const Button = (props) => {
    return (
        <ButtonContainer onClick={props.onClick} color={props.color} rounded={props.rounded}>
            {props.children}
        </ButtonContainer>
    )
};

export default Button;