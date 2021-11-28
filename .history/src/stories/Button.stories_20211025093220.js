import Button from '../components/Button/Button';

export default {
    title: "Button",
    component: Button,
};

const Template = args => <Button {...args} />;

export const Blue = () => Template.bind({});
Blue.args = {
    color: 'blue',
};

