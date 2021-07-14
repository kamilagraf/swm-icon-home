import Button from './Button';
import { Circle } from 'react-swm-icon-pack';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Normal = Template.bind({});

export const LightNormal = Template.bind({});
LightNormal.args = {
  isSecondary: true,
};

export const NormalIcon = Template.bind({});
NormalIcon.args = {
  Icon: Circle,
};

export const LightNormalIcon = Template.bind({});
LightNormalIcon.args = {
  isSecondary: true,
  Icon: Circle,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const DisabledIcon = Template.bind({});
DisabledIcon.args = {
  isDisabled: true,
  Icon: Circle,
};
