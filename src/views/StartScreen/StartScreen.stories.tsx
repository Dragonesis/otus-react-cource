import React from 'react'
import { Story, Meta } from '@storybook/react'
import { StartScreen, StartScreenProps } from './StartScreen'

export default {
  title: 'StartScreen',
  component: StartScreen,
  argTypes: {
    setUser: { action: 'Enter game' },
  },
} as Meta

export const StartScreenExample: Story<StartScreenProps> = (args) => <StartScreen {...args} />
