import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'UI/Button',
  component: Button,
} as Meta

export const ButtonExample: Story<ButtonProps> = (args) => <Button {...args}>Test</Button>
