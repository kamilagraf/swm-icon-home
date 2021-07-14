import IconTemplate from './IconTemplate';
import { Circle } from 'react-swm-icon-pack';

export default {
  title: 'Components/Atoms/IconTemplate',
  component: IconTemplate,
};

const Template = (args) => <IconTemplate {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  Icon: Circle,
  name: 'Circle',
};

export const Active = Template.bind({});
Active.args = {
  Icon: Circle,
  name: 'Circle',
  isActive: true,
};
