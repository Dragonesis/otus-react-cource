import React from 'react'
import { render } from '@testing-library/react'

import { Field } from './Field'

describe('### Field', () => {
  test('Field renders correctly', () => {
    const { asFragment } = render(<Field />)
    expect(asFragment()).toMatchSnapshot()
  })
})
