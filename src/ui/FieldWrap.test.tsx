import React from 'react'
import { render } from '@testing-library/react'

import { FieldWrap } from './FieldWrap'

describe('### FieldWrap', () => {
  test('FieldWrap renders correctly', () => {
    const { asFragment } = render(<FieldWrap />)
    expect(asFragment()).toMatchSnapshot()
  })
})
