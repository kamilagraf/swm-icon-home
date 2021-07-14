import { Paragraph } from './Paragraph';

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args}>lorem ipsum dolor sit amet, consectetur adip</Paragraph>;

export const SmallRegular = Template.bind({});

export const SmallMedium = Template.bind({});
SmallMedium.args = {
  isMedium: true,
};

export const LargeRegular = Template.bind({});
LargeRegular.args = {
  isLarge: true,
};

export const LargeMedium = Template.bind({});
LargeMedium.args = {
  isLarge: true,
  isMedium: true,
};
