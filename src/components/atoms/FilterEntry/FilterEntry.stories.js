import FilterEntry from './FilterEntry';

export default {
  title: 'Components/Atoms/FilterEntry',
  component: FilterEntry,
};

const Template = (args) => <FilterEntry {...args}>Name</FilterEntry>;

export const IconStyle = Template.bind({});

export const Category = Template.bind({});
Category.args = {
  number: 15,
};

export const Enabled = Template.bind({});
Enabled.args = {
  isEnabled: true,
};
