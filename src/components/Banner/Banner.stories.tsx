import { Story, Meta } from '@storybook/react/types-6-0'

import Banner, { BannerProps } from './Banner'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {},
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

const Template: Story<BannerProps> = (args) => <Banner {...args} />

export const Default = Template.bind({})
Default.argTypes = {}