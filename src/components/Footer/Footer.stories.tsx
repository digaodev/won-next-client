import { Story, Meta } from '@storybook/react/types-6-0'

import Footer from './Footer'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {}
} as Meta

const Template: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)

export const Default = Template.bind({})
Default.argTypes = {}
