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
Purple.args = {
    color: 'purple',
};

export const Pink = Template.bind({});
Pink.args = {
    color: 'pink',
};

export const Red = Template.bind({});
Red.args = {
    color: 'red',
};

export const Other = Template.bind({});
Other.args = {
    color: 'other',
};


