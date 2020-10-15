import React from 'react';

import Section from '../components/section';

export default {
  title: 'Example/Section',
  component: Section,
};

const Template = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sections',
};

export const Prominent = Template.bind({});
Prominent.args = {
  prominent: true,
};
