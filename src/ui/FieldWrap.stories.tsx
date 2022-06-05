import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FieldWrap, FieldWrapProps } from './FieldWrap'
import { Field } from './Field'

const components = [<Field placeholder='test' />, <><Field placeholder='test 2' /> <p>Текст под полем</p></>]

export default {
  title: 'UI/FieldWrap',
  component: FieldWrap,
  argTypes: {
    children: {
      options: Object.keys(components),
      mapping: components,
      control: {
        type: 'select',
        labels: ['Текстовое поле', 'Текстовое поле с подсказкой'],
      },
    },

  }
} as Meta

export const FieldWrapExample: Story<FieldWrapProps> = (args) => <FieldWrap {...args} />

FieldWrapExample.args = {
  children: <Field placeholder='test' />,
}
