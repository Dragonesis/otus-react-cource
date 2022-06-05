import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Card, CardProps } from './Card'

export default {
  title: 'PlayingField/Card',
  component: Card,
  argTypes: {
    handleClick: { action: 'Click on card' },
  },
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />
export const CardExample = Template.bind({})

CardExample.args = {
  unit: {
    id: 'id',
    name: 'Name',
    power: 5,
    defense: 5,
    className: 'magician',
  },
}
