import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ErrorBoundary, ErrorBoundaryProps } from './ErrorBoundary'
import { StartScreen } from '@/views/StartScreen'

// eslint-disable-next-line  @typescript-eslint/no-empty-function
const Child = () => {
  throw new Error()
}
// eslint-disable-next-line  @typescript-eslint/no-empty-function
const components = [<StartScreen setUser={() => { }} />, <Child />]

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {
    children: {
      options: Object.keys(components),
      mapping: components,
      control: {
        type: 'select',
        labels: ['Нормальное состояние', 'Состояние с ошибкой'],
      },
    },
  }
} as Meta

export const ErrorBoundaryExample: Story<ErrorBoundaryProps> = (args) => <ErrorBoundary {...args} />

ErrorBoundaryExample.args = {
  // eslint-disable-next-line  @typescript-eslint/no-empty-function
  children: <StartScreen setUser={() => {}}/>,
}
