import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Basic: StoryObj = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}
