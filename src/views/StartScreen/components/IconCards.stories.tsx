import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconCards, IconCardsProps } from './IconCards'

export default {
  title: 'StartScreen/IconCards',
  component: IconCards,
} as Meta

export const IconCardsExample: Story<IconCardsProps> = (args) => <IconCards {...args} />

IconCardsExample.args = {
  className: 'SOME_CLASS',
}
