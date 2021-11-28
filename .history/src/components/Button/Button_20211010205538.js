import ButtonContainer from './styles';

const Button = (props) => {
    return (
        <ButtonContainer>
            {props.children}
        </ButtonContainer>
    )
}