import { Story, Meta } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: {
      type: 'string'
    }
  }
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Most Populars'
}
