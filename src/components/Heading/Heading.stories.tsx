import { Story, Meta } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: 'Most Populars'
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Default = Template.bind({})
