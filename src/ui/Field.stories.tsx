import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Field, FieldProps } from './Field'

export default {
  title: 'UI/Field',
  component: Field,
} as Meta

export const FieldExample: Story<FieldProps> = (args) => <Field {...args} />
