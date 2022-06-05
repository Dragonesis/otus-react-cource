import React from 'react'
import { Story, Meta } from '@storybook/react'
import { PlayersNow, PlayersNowProps } from './PlayersNow'

export default {
  title: 'StartScreen/PlayersNow',
  component: PlayersNow,
} as Meta

export const PlayersNowExample: Story<PlayersNowProps> = (args) => <PlayersNow {...args} />

PlayersNowExample.args = {
  countGamer: 200,
}
