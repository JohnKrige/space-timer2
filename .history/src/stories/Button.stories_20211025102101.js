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

export const Purple = Template.bind({});
Blue.args = {
    color: 'purple',
};

export const Pink = Template.bind({});
Blue.args = {
    color: 'pink',
};

export const Red = Template.bind({});
Blue.args = {
    color: 'red',
};

export const Other = Template.bind({});
Blue.args = {
    color: 'other',
};


