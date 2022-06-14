import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'PlayingField/Header',
  component: Header,
} as Meta

export const HeaderExample: Story = (args) => <Header {...args} />

HeaderExample.args = {
  name: 'Sebastian',
}
