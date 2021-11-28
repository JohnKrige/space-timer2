import { ButtonContainer } from './styles';

const Button = (props) => {
    console.log(props.color);
    return (
        <ButtonContainer onClick={props.onClick} color={props.color}>
            {props.children}
        </ButtonContainer>
    )
};

export default Button;