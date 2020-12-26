import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button, { ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: {
      type: 'string'
    }
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Buy Now'
}

export const withIcon = Template.bind({})
withIcon.args = {
  children: 'Buy Now',
  size: 'small',
  icon: <AddShoppingCart />
}
