import { Story, Meta } from '@storybook/react/types-6-0'

import Logo, { LogoProps } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {},
  args: {},
  parameters: {}
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {}
