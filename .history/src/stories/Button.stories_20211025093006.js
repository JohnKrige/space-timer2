import Button from '../components/Button/Button';

export default {
    title: "Button",
    component: Button,
};

const Template = args => <Button {...args} />;

export const Blue = () => {
    return <Button color="blue">Press me</Button>
};

