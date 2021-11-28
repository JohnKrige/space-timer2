import { ButtonContainer } from './styles';

const Button = (props) => {
    return (
        <ButtonContainer onClick={props.onClick} color={"blue"}>
            {props.children}
        </ButtonContainer>
    )
};

export default Button;