import Button from '../components/Button/Button';

export default {
    title: 'components/Button',
    component: Button,
};

const Template = args => <Button {...args}>Press me</Button>;

export const Blue = Template.bind({});
Blue.args = {
    color: 'blue',
};

