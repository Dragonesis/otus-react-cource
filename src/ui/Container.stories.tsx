import React from 'react'
import { Story, Meta } from '@storybook/react'
import styled from '@emotion/styled'

import { Container } from './Container'

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #cacaca;
`

export default {
  title: 'UI/Container',
  component: Container,
} as Meta

export const ContainerExample: Story = () => <Container><Box /></Container>