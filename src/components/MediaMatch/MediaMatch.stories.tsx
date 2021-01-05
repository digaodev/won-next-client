import { Story, Meta } from '@storybook/react/types-6-0'

import MediaMatch, { MediaMatchProps } from './MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  argTypes: {},
  args: {},
  parameters: {}
} as Meta

export const Desktop: Story<MediaMatchProps> = (args) => (
  <MediaMatch greaterThan="medium" {...args}>
    Only on Desktop
  </MediaMatch>
)

export const Mobile: Story<MediaMatchProps> = (args) => (
  <MediaMatch lessThan="medium" {...args}>
    Only on Mobile
  </MediaMatch>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
