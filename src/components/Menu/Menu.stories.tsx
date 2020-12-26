import { Story, Meta } from '@storybook/react/types-6-0'

import Menu, { MenuProps } from './Menu'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {}
} as Meta

const Template: Story<MenuProps> = (args) => <Menu {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
