import { Story, Meta } from '@storybook/react/types-6-0'

import Ribbon, { RibbonProps } from './Ribbon'

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: 'Best Seller'
  }
} as Meta

const Template: Story<RibbonProps> = (args) => <Ribbon {...args} />

export const Default = Template.bind({})
