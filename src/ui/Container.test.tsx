import React from 'react'
import { render } from '@testing-library/react'

import { Container } from './Container'

describe('### Container', () => {
  test('Container renders correctly', () => {
    const { asFragment } = render(<Container />)
    expect(asFragment()).toMatchSnapshot()
  })
})
