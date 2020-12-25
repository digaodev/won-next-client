import { Story, Meta } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#F8F8F8' },
        { name: 'dark', value: '#333333' }
      ]
    }
  }
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Most Populars'
}
