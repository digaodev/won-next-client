import { Story, Meta } from '@storybook/react/types-6-0'

import Main, { MainProps } from './Main'

export default {
  title: 'Main',
  component: Main,
  argTypes: {},
  args: {
    title: 'title default',
    description: 'description default'
  },
  parameters: {}
} as Meta

const Template: Story<MainProps> = (args) => <Main {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}
