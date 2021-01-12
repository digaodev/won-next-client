import { Story, Meta } from '@storybook/react/types-6-0'

import Highlight, { HighlightProps } from './Highlight'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {},
  args: {
    title: 'Red Dead is back!',
    subtitle: "Come see John's new adventure",
    buttonLabel: 'Buy Now',
    buttonLink: '/buy',
    backgroundImage: '/img/red-dead-img.jpg'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const Default = Template.bind({})

export const WithFloatImage = Template.bind({})
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
